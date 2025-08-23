import { NextRequest, NextResponse } from 'next/server'
import webpush from 'web-push'

// Configure VAPID details
webpush.setVapidDetails(
  'mailto:contact@pravdast.agency',
  process.env.VAPID_PUBLIC_KEY || '',
  process.env.VAPID_PRIVATE_KEY || ''
)

export async function POST(request: NextRequest) {
  try {
    const { title, body, url, image, subscriptions, tag } = await request.json()
    
    const payload = JSON.stringify({
      title: title || 'Pravda ST',
      body: body || 'Ново известие от Pravda ST',
      url: url || '/',
      image: image || '/og-images/default.svg',
      tag: tag || 'pravda-notification',
      timestamp: Date.now()
    })
    
    const sendPromises = subscriptions.map((subscription: any) => {
      return webpush.sendNotification(subscription, payload)
        .catch((error: any) => {
          console.error('Error sending notification:', error)
          // TODO: Mark subscription as invalid if error indicates it
          return null
        })
    })
    
    const results = await Promise.allSettled(sendPromises)
    const successful = results.filter(result => result.status === 'fulfilled').length
    const failed = results.length - successful
    
    return NextResponse.json({
      success: true,
      message: `Sent ${successful} notifications, ${failed} failed`,
      stats: { successful, failed, total: results.length }
    })
  } catch (error) {
    console.error('Error sending push notifications:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send notifications' },
      { status: 500 }
    )
  }
}

// Helper endpoint to send test notification
export async function GET() {
  // TODO: Get all active subscriptions from database
  const testSubscriptions: any[] = [] // Would be from database
  
  if (testSubscriptions.length === 0) {
    return NextResponse.json({
      success: false,
      message: 'No active subscriptions found'
    })
  }
  
  const payload = JSON.stringify({
    title: 'Тест известие от Pravda ST',
    body: 'Това е тестово известие за проверка на push notification системата.',
    url: '/blog',
    tag: 'test-notification'
  })
  
  try {
    const sendPromises = testSubscriptions.map(subscription => {
      return webpush.sendNotification(subscription, payload)
    })
    
    await Promise.all(sendPromises)
    
    return NextResponse.json({
      success: true,
      message: `Test notification sent to ${testSubscriptions.length} subscribers`
    })
  } catch (error) {
    console.error('Error sending test notification:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send test notification' },
      { status: 500 }
    )
  }
}