'use client'

import { useState, useEffect } from 'react'

// CRM Provider types
type CRMProvider = 'hubspot' | 'pipedrive' | 'none'

interface ContactData {
  name: string
  email: string
  company?: string
  website?: string
  message: string
  phone?: string
  source: string
  utm_campaign?: string
  utm_source?: string
  utm_medium?: string
}

interface HubSpotContact {
  properties: {
    firstname: string
    lastname: string
    email: string
    company?: string
    website?: string
    message?: string
    phone?: string
    lead_source?: string
    utm_campaign?: string
    utm_source?: string
    utm_medium?: string
  }
}

interface PipedriveContact {
  name: string
  email: string[]
  org_name?: string
  notes?: string
  phone?: string[]
  custom_fields?: Record<string, any>
}

class CRMIntegration {
  private provider: CRMProvider = 'none'
  private hubspotApiKey?: string
  private pipedriveApiKey?: string
  private hubspotPortalId?: string

  constructor() {
    this.initialize()
  }

  private initialize() {
    // Check which CRM is configured
    this.hubspotApiKey = process.env.NEXT_PUBLIC_HUBSPOT_API_KEY
    this.pipedriveApiKey = process.env.NEXT_PUBLIC_PIPEDRIVE_API_KEY
    this.hubspotPortalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID

    if (this.hubspotApiKey && this.hubspotPortalId) {
      this.provider = 'hubspot'
    } else if (this.pipedriveApiKey) {
      this.provider = 'pipedrive'
    }
  }

  async createContact(contactData: ContactData): Promise<boolean> {
    try {
      switch (this.provider) {
        case 'hubspot':
          return await this.createHubSpotContact(contactData)
        case 'pipedrive':
          return await this.createPipedriveContact(contactData)
        default:
          console.log('No CRM configured, skipping contact creation')
          return false
      }
    } catch (error) {
      console.error('CRM contact creation failed:', error)
      return false
    }
  }

  private async createHubSpotContact(contactData: ContactData): Promise<boolean> {
    if (!this.hubspotApiKey || !this.hubspotPortalId) return false

    const [firstName, ...lastNameParts] = contactData.name.split(' ')
    const lastName = lastNameParts.join(' ')

    const hubspotContact: HubSpotContact = {
      properties: {
        firstname: firstName,
        lastname: lastName || '',
        email: contactData.email,
        company: contactData.company,
        website: contactData.website,
        message: contactData.message,
        phone: contactData.phone,
        lead_source: contactData.source,
        utm_campaign: contactData.utm_campaign,
        utm_source: contactData.utm_source,
        utm_medium: contactData.utm_medium
      }
    }

    const response = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.hubspotApiKey}`
      },
      body: JSON.stringify(hubspotContact)
    })

    if (response.ok) {
      const createdContact = await response.json()
      console.log('HubSpot contact created:', createdContact.id)
      
      // Create a deal/opportunity
      await this.createHubSpotDeal(createdContact.id, contactData)
      
      return true
    }

    return false
  }

  private async createHubSpotDeal(contactId: string, contactData: ContactData): Promise<void> {
    if (!this.hubspotApiKey) return

    const deal = {
      properties: {
        dealname: `Inquiry from ${contactData.name}`,
        dealstage: 'qualifiedtobuy', // Adjust based on your pipeline
        pipeline: 'default', // Adjust based on your pipeline
        amount: '5000', // Estimated deal value in BGN
        closedate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
        lead_source: contactData.source
      },
      associations: [
        {
          to: { id: contactId },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 3 }] // Contact to Deal
        }
      ]
    }

    await fetch(`https://api.hubapi.com/crm/v3/objects/deals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.hubspotApiKey}`
      },
      body: JSON.stringify(deal)
    })
  }

  private async createPipedriveContact(contactData: ContactData): Promise<boolean> {
    if (!this.pipedriveApiKey) return false

    // First, create or find organization
    let orgId: number | undefined
    if (contactData.company) {
      orgId = await this.createPipedriveOrganization(contactData.company, contactData.website)
    }

    const pipedriveContact: PipedriveContact = {
      name: contactData.name,
      email: [contactData.email],
      org_name: contactData.company,
      notes: contactData.message,
      phone: contactData.phone ? [contactData.phone] : undefined,
      custom_fields: {
        lead_source: contactData.source,
        utm_campaign: contactData.utm_campaign,
        utm_source: contactData.utm_source,
        utm_medium: contactData.utm_medium
      }
    }

    const response = await fetch(`https://api.pipedrive.com/v1/persons?api_token=${this.pipedriveApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pipedriveContact)
    })

    if (response.ok) {
      const createdContact = await response.json()
      console.log('Pipedrive person created:', createdContact.data.id)
      
      // Create a deal
      await this.createPipedriveDeal(createdContact.data.id, orgId, contactData)
      
      return true
    }

    return false
  }

  private async createPipedriveOrganization(name: string, website?: string): Promise<number | undefined> {
    if (!this.pipedriveApiKey) return undefined

    const org = {
      name,
      website
    }

    const response = await fetch(`https://api.pipedrive.com/v1/organizations?api_token=${this.pipedriveApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(org)
    })

    if (response.ok) {
      const createdOrg = await response.json()
      return createdOrg.data.id
    }

    return undefined
  }

  private async createPipedriveDeal(personId: number, orgId: number | undefined, contactData: ContactData): Promise<void> {
    if (!this.pipedriveApiKey) return

    const deal = {
      title: `Inquiry from ${contactData.name}`,
      person_id: personId,
      org_id: orgId,
      value: 5000, // Estimated deal value in BGN
      currency: 'BGN',
      stage_id: 1, // Adjust based on your pipeline
      status: 'open',
      notes: contactData.message,
      custom_fields: {
        lead_source: contactData.source
      }
    }

    await fetch(`https://api.pipedrive.com/v1/deals?api_token=${this.pipedriveApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deal)
    })
  }

  // Email automation workflows
  async triggerEmailSequence(contactEmail: string, sequenceType: 'welcome' | 'nurture' | 'followup'): Promise<void> {
    if (this.provider === 'hubspot' && this.hubspotApiKey) {
      await this.triggerHubSpotWorkflow(contactEmail, sequenceType)
    }
  }

  private async triggerHubSpotWorkflow(contactEmail: string, sequenceType: string): Promise<void> {
    // HubSpot workflow IDs would be configured in environment variables
    const workflowIds = {
      welcome: process.env.NEXT_PUBLIC_HUBSPOT_WELCOME_WORKFLOW_ID,
      nurture: process.env.NEXT_PUBLIC_HUBSPOT_NURTURE_WORKFLOW_ID,
      followup: process.env.NEXT_PUBLIC_HUBSPOT_FOLLOWUP_WORKFLOW_ID
    }

    const workflowId = workflowIds[sequenceType as keyof typeof workflowIds]
    if (!workflowId || !this.hubspotApiKey) return

    await fetch(`https://api.hubapi.com/automation/v3/workflows/${workflowId}/enrollments/contacts/${contactEmail}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.hubspotApiKey}`,
        'Content-Type': 'application/json'
      }
    })
  }

  // Get CRM status and configuration
  getStatus(): { provider: CRMProvider, configured: boolean } {
    return {
      provider: this.provider,
      configured: this.provider !== 'none'
    }
  }

  // Sync existing contacts (for migration)
  async syncContacts(contacts: ContactData[]): Promise<{ success: number, failed: number }> {
    let success = 0
    let failed = 0

    for (const contact of contacts) {
      const result = await this.createContact(contact)
      if (result) {
        success++
      } else {
        failed++
      }
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    return { success, failed }
  }
}

// Singleton instance
const crmIntegration = new CRMIntegration()

// React hook for CRM integration
export function useCRMIntegration() {
  const [status, setStatus] = useState(crmIntegration.getStatus())

  useEffect(() => {
    setStatus(crmIntegration.getStatus())
  }, [])

  const createContact = async (contactData: ContactData): Promise<boolean> => {
    return await crmIntegration.createContact(contactData)
  }

  const triggerEmailSequence = async (email: string, type: 'welcome' | 'nurture' | 'followup') => {
    await crmIntegration.triggerEmailSequence(email, type)
  }

  return {
    status,
    createContact,
    triggerEmailSequence
  }
}

// Component for CRM configuration status
export function CRMStatus() {
  const { status } = useCRMIntegration()

  if (!status.configured) {
    return (
      <div className="bg-amber-100 border border-amber-400 text-amber-700 px-4 py-3 rounded">
        <p className="font-medium">CRM не е конфигуриран</p>
        <p className="text-sm">
          Добавете API ключове за HubSpot или Pipedrive в environment variables за автоматично CRM интегриране.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
      <p className="font-medium">✅ CRM интегриран: {status.provider}</p>
      <p className="text-sm">
        Контактите автоматично се синхронизират с вашата CRM система.
      </p>
    </div>
  )
}

// Enhanced contact form component with CRM integration
export function CRMContactForm() {
  const { createContact, triggerEmailSequence } = useCRMIntegration()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData: ContactData) => {
    setIsSubmitting(true)

    try {
      // Submit to local database
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        // Create contact in CRM
        const crmSuccess = await createContact(formData)
        
        if (crmSuccess) {
          console.log('Contact created in CRM successfully')
          
          // Trigger welcome email sequence
          await triggerEmailSequence(formData.email, 'welcome')
        }

        alert('Формата е изпратена успешно!')
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Възникна грешка при изпращане на формата')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Form implementation would go here */}
      <p className="text-sm text-gray-600">
        CRM интегрираната форма автоматично ще създаде контакт и започне email последователност.
      </p>
    </div>
  )
}

export { crmIntegration }