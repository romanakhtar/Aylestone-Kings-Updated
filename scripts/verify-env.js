#!/usr/bin/env node

/**
 * Environment Variables Verification Script
 * 
 * Run this script on your production server to verify SMTP configuration:
 * node scripts/verify-env.js
 */

const requiredVars = [
  'SMTP_USER',
  'SMTP_PASSWORD'
]

const optionalVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_FROM_EMAIL',
  'DRIVER_FORM_EMAIL'
]

console.log('\n🔍 Checking SMTP Environment Variables...\n')

let allRequiredSet = true
let hasErrors = false

// Check required variables
console.log('📋 Required Variables:')
requiredVars.forEach(varName => {
  const value = process.env[varName]
  if (value) {
    // Mask the password for security
    const displayValue = varName === 'SMTP_PASSWORD' 
      ? '*'.repeat(Math.min(value.length, 20)) + (value.length > 20 ? '...' : '')
      : value
    console.log(`  ✅ ${varName}: ${displayValue}`)
  } else {
    console.log(`  ❌ ${varName}: NOT SET`)
    allRequiredSet = false
    hasErrors = true
  }
})

// Check optional variables
console.log('\n📋 Optional Variables:')
optionalVars.forEach(varName => {
  const value = process.env[varName]
  if (value) {
    console.log(`  ✅ ${varName}: ${value}`)
  } else {
    console.log(`  ⚠️  ${varName}: Not set (using default)`)
  }
})

// Summary
console.log('\n' + '='.repeat(50))
if (allRequiredSet) {
  console.log('✅ All required SMTP variables are set!')
  console.log('\n💡 If you\'re still experiencing issues:')
  console.log('   1. Make sure you restarted your application after setting variables')
  console.log('   2. Check your SMTP credentials are correct')
  console.log('   3. Verify your email provider allows SMTP access')
} else {
  console.log('❌ Missing required SMTP variables!')
  console.log('\n📖 To fix this:')
  console.log('   1. Create a .env.local file in your project root')
  console.log('   2. Add SMTP_USER and SMTP_PASSWORD')
  console.log('   3. Restart your application')
  console.log('\n   See PRODUCTION_DEPLOYMENT.md for detailed instructions')
  hasErrors = true
}
console.log('='.repeat(50) + '\n')

// Exit with error code if variables are missing
process.exit(hasErrors ? 1 : 0)

