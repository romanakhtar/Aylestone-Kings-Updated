import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Create reusable transporter
const createTransporter = () => {
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
  const smtpPort = parseInt(process.env.SMTP_PORT || '587')
  const smtpUser = process.env.SMTP_USER
  const smtpPassword = process.env.SMTP_PASSWORD

  if (!smtpUser || !smtpPassword) {
    return null
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Extract form fields
    const formFields: Record<string, string> = {}
    const files: Array<{ name: string; file: File }> = []
    
    // Separate form fields from files
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        files.push({ name: key, file: value })
      } else {
        formFields[key] = value.toString()
      }
    }

    // Build email HTML content
    let emailHtml = `
      <h2>New Driver Application</h2>
      <h3>Personal Information</h3>
      <ul>
        <li><strong>Full Name:</strong> ${formFields.full_name || 'N/A'}</li>
        <li><strong>Date of Birth:</strong> ${formFields.dob || 'N/A'}</li>
        <li><strong>Mobile:</strong> ${formFields.mobile || 'N/A'}</li>
        <li><strong>Email:</strong> ${formFields.email || 'N/A'}</li>
        <li><strong>National Insurance Number:</strong> ${formFields.ni_number || 'N/A'}</li>
        <li><strong>Address:</strong> ${formFields.address_line1 || 'N/A'}</li>
        <li><strong>City:</strong> ${formFields.city || 'N/A'}</li>
        <li><strong>Postcode:</strong> ${formFields.postcode || 'N/A'}</li>
      </ul>

      <h3>Licence & Compliance</h3>
      <ul>
        <li><strong>Driving Licence Number:</strong> ${formFields.driving_licence_number || 'N/A'}</li>
        <li><strong>Licence Issue Date:</strong> ${formFields.dl_issue_date || 'N/A'}</li>
        <li><strong>Licence Expiry Date:</strong> ${formFields.dl_expiry_date || 'N/A'}</li>
        <li><strong>Licensing Council:</strong> ${formFields.licensing_council || 'N/A'}</li>
        <li><strong>Badge Number:</strong> ${formFields.badge_number || 'N/A'}</li>
        <li><strong>Badge Expiry Date:</strong> ${formFields.badge_expiry_date || 'N/A'}</li>
        <li><strong>DBS Number:</strong> ${formFields.dbs_number || 'N/A'}</li>
        <li><strong>DBS Issue Date:</strong> ${formFields.dbs_issue_date || 'N/A'}</li>
        <li><strong>DBS Update Service:</strong> ${formFields.dbs_update_service || 'N/A'}</li>
        <li><strong>Right to Work Status:</strong> ${formFields.right_to_work_status || 'N/A'}</li>
    `

    if (formFields.rtw_share_code) {
      emailHtml += `<li><strong>Share Code:</strong> ${formFields.rtw_share_code}</li>`
    }

    if (formFields.visa_type) {
      emailHtml += `
        <li><strong>Visa Type:</strong> ${formFields.visa_type}</li>
        <li><strong>Visa Expiry Date:</strong> ${formFields.visa_expiry_date || 'N/A'}</li>
      `
    }

    emailHtml += `</ul>`

    if (formFields.owns_vehicle === 'true' || formFields.vrm) {
      emailHtml += `
        <h3>Vehicle Information</h3>
        <ul>
          <li><strong>VRM:</strong> ${formFields.vrm || 'N/A'}</li>
          <li><strong>Make:</strong> ${formFields.make || 'N/A'}</li>
          <li><strong>Model:</strong> ${formFields.model || 'N/A'}</li>
          <li><strong>Year:</strong> ${formFields.year || 'N/A'}</li>
          <li><strong>Colour:</strong> ${formFields.colour || 'N/A'}</li>
          <li><strong>Plate Expiry:</strong> ${formFields.plate_expiry_date || 'N/A'}</li>
          <li><strong>Insurance Expiry:</strong> ${formFields.insurance_expiry_date || 'N/A'}</li>
          <li><strong>MOT Expiry:</strong> ${formFields.mot_expiry_date || 'N/A'}</li>
        </ul>
      `
    }

    emailHtml += `
      <h3>Payment & Work Preferences</h3>
      <ul>
        <li><strong>Account Holder:</strong> ${formFields.account_holder || 'N/A'}</li>
        <li><strong>Sort Code:</strong> ${formFields.sort_code || 'N/A'}</li>
        <li><strong>Account Number:</strong> ${formFields.account_number || 'N/A'}</li>
        <li><strong>Work Type:</strong> ${formFields.work_type || 'N/A'}</li>
        <li><strong>Preferred Shifts:</strong> ${formFields.preferred_shifts || 'N/A'}</li>
        <li><strong>Vehicle Option:</strong> ${formFields.vehicle_option || 'N/A'}</li>
      </ul>

      <h3>Declarations</h3>
      <ul>
        <li><strong>Accuracy Declaration:</strong> ${formFields.decl_accuracy ? 'Yes' : 'No'}</li>
        <li><strong>Verification Authorization:</strong> ${formFields.decl_verification ? 'Yes' : 'No'}</li>
        <li><strong>GDPR Consent:</strong> ${formFields.decl_gdpr ? 'Yes' : 'No'}</li>
      </ul>
    `

    // Prepare attachments
    const attachments = await Promise.all(
      files.map(async ({ name, file }) => {
        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        return {
          filename: `${name}_${file.name}`,
          content: buffer,
        }
      })
    )

    // Check if SMTP is configured
    const transporter = createTransporter()
    if (!transporter) {
      console.error('SMTP is not configured')
      return NextResponse.json(
        { 
          error: 'Email service not configured. Please set SMTP_USER and SMTP_PASSWORD environment variables.',
          details: 'Missing SMTP configuration in .env.local file'
        },
        { status: 500 }
      )
    }

    const emailTo = process.env.DRIVER_FORM_EMAIL || 'info@aylestone-taxis.co.uk'
    const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'noreply@aylestone-taxis.co.uk'

    try {
      const info = await transporter.sendMail({
        from: `Driver Application <${fromEmail}>`,
        to: emailTo,
        subject: `New Driver Application - ${formFields.full_name || 'Unknown'}`,
        html: emailHtml,
        attachments: attachments.length > 0 ? attachments : undefined,
      })

      console.log('Email sent successfully:', info.messageId)

      return NextResponse.json(
        { success: true, message: 'Application submitted successfully', messageId: info.messageId },
        { status: 200 }
      )
    } catch (sendError) {
      console.error('Error sending email:', sendError)
      
      let errorMessage = 'Failed to send email'
      let userFriendlyMessage = 'There was an error sending your application. Please try again or contact us directly.'

      if (sendError instanceof Error) {
        errorMessage = sendError.message
        
        // Provide user-friendly messages for common SMTP errors
        if (errorMessage.includes('Invalid login') || errorMessage.includes('authentication failed')) {
          userFriendlyMessage = 'Email service authentication error. Please contact the website administrator.'
        } else if (errorMessage.includes('connection') || errorMessage.includes('timeout')) {
          userFriendlyMessage = 'Email service connection error. Please try again in a few moments.'
        } else if (errorMessage.includes('rate limit') || errorMessage.includes('quota')) {
          userFriendlyMessage = 'Too many submissions. Please try again in a few minutes.'
        }
      }

      return NextResponse.json(
        { 
          error: userFriendlyMessage,
          details: errorMessage,
          technicalError: sendError instanceof Error ? sendError.stack : String(sendError)
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
