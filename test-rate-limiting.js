#!/usr/bin/env node

// Test script to verify the database-based rate limiting functionality
const fetch = require('node:fetch');

const API_URL = 'http://localhost:5000/api/contacts';

const testPayload = {
  name: 'Test User',
  email: 'test@example.com', 
  company: 'Test Company',
  website: 'https://example.com',
  message: 'This is a test message for rate limiting verification.'
};

async function testRateLimit() {
  console.log('🧪 Testing database-based rate limiting...\n');
  
  let successCount = 0;
  let rateLimitedCount = 0;
  
  // Send 10 requests rapidly to test rate limiting
  for (let i = 1; i <= 10; i++) {
    try {
      console.log(`📤 Sending request ${i}...`);
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Rate-Limit-Test-Script'
        },
        body: JSON.stringify({
          ...testPayload,
          message: `Test message #${i} - ${new Date().toISOString()}`
        })
      });
      
      const data = await response.json();
      
      if (response.status === 429) {
        rateLimitedCount++;
        console.log(`⛔ Request ${i}: Rate limited (429)`);
        console.log(`   Message: ${data.message}`);
        if (data.resetTime) {
          console.log(`   Reset time: ${data.resetTime}`);
        }
      } else if (response.status === 200 || response.status === 201) {
        successCount++;
        console.log(`✅ Request ${i}: Success (${response.status})`);
      } else {
        console.log(`⚠️  Request ${i}: Unexpected status ${response.status}`);
        console.log(`   Response: ${JSON.stringify(data)}`);
      }
      
      // Small delay between requests
      await new Promise(resolve => setTimeout(resolve, 100));
      
    } catch (error) {
      console.log(`❌ Request ${i}: Error - ${error.message}`);
    }
  }
  
  console.log('\n📊 Test Results:');
  console.log(`✅ Successful requests: ${successCount}`);
  console.log(`⛔ Rate limited requests: ${rateLimitedCount}`);
  console.log(`📝 Total requests: ${successCount + rateLimitedCount}`);
  
  if (rateLimitedCount > 0) {
    console.log('\n🎉 SUCCESS: Rate limiting is working! Spam protection is active.');
    console.log('📋 The database-based rate limiting successfully blocked excessive requests.');
  } else {
    console.log('\n⚠️  WARNING: No rate limiting detected. This may indicate an issue.');
  }
  
  return { successCount, rateLimitedCount };
}

if (require.main === module) {
  testRateLimit().catch(console.error);
}

module.exports = { testRateLimit };