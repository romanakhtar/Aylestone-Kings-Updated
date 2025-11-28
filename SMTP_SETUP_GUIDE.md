# SMTP Email Configuration Guide

## Problem
The email service is not configured. You're seeing the error:
```
Email service not configured. Please set SMTP_USER and SMTP_PASSWORD environment variables.
```

## Solution

### Step 1: Create `.env.local` file

Create a file named `.env.local` in the root directory of your project (same level as `package.json`).

### Step 2: Add SMTP Configuration

Copy the following template into your `.env.local` file and replace the placeholder values:

```env
# SMTP Email Configuration
# Required: Your SMTP email address
SMTP_USER=your-email@gmail.com

# Required: Your SMTP password or app password
SMTP_PASSWORD=your-app-password-here

# Optional: SMTP Server Settings (defaults are for Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587

# Optional: Email Addresses
SMTP_FROM_EMAIL=noreply@aylestone-taxis.co.uk
DRIVER_FORM_EMAIL=info@aylestone-taxis.co.uk

# Optional: File Storage Configuration
# Directory where uploaded files are stored (defaults to ./uploads)
UPLOAD_DIR=./uploads

# File retention period in days (defaults to 30 days)
FILE_RETENTION_DAYS=30

# Base URL for file download links (auto-detected in production)
# NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

### Step 3: Get Your SMTP Credentials

#### For Gmail Users:

1. **Enable 2-Step Verification** (if not already enabled):
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Generate an App Password**:
   - Go to [Google Account App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Select "Other (Custom name)" as the device
   - Enter "Aylestone Taxis Driver Form" as the name
   - Click "Generate"
   - Copy the 16-character password (spaces don't matter)

3. **Update `.env.local`**:
   ```env
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=xxxx xxxx xxxx xxxx
   ```

#### For Outlook/Hotmail Users:

1. **Enable App Passwords**:
   - Go to [Microsoft Account Security](https://account.microsoft.com/security)
   - Enable 2-Step Verification if not already enabled
   - Go to "App passwords" and generate one

2. **Update `.env.local`**:
   ```env
   SMTP_USER=your-email@outlook.com
   SMTP_PASSWORD=your-app-password
   SMTP_HOST=smtp-mail.outlook.com
   SMTP_PORT=587
   ```

#### For Other Email Providers:

Check your email provider's documentation for SMTP settings:
- **Yahoo**: `smtp.mail.yahoo.com:587`
- **Custom SMTP**: Contact your email provider or hosting company

### Step 4: Restart Your Development Server

After creating/updating `.env.local`:
1. Stop your development server (Ctrl+C)
2. Start it again: `npm run dev` or `pnpm dev`

**Important**: Environment variables are only loaded when the server starts, so you must restart after making changes.

## Security Notes

- ✅ `.env.local` is already in `.gitignore` - your credentials won't be committed to git
- ❌ Never commit `.env.local` to version control
- ✅ Use App Passwords instead of your main email password when possible
- ✅ Keep your credentials secure and don't share them

## File Upload System

The driver application form now uses a file upload system that stores files on the server and sends download links via email instead of attaching files directly. This approach:

- ✅ **Handles large files smoothly** - No more email size limit issues
- ✅ **Faster email delivery** - Emails send quickly without large attachments
- ✅ **Better reliability** - No SMTP timeouts with large files
- ✅ **Secure file storage** - Files are stored securely with unique names

### How It Works

1. When a driver submits the form, files are uploaded to the server
2. Files are stored in the `uploads` directory (configurable via `UPLOAD_DIR`)
3. Download links are generated and included in the email
4. Recipients can click the links to download files
5. Files are automatically cleaned up after the retention period (default: 30 days)

### File Storage Location

- **Development**: Files are stored in `./uploads` directory (created automatically)
- **Production**: Ensure the upload directory has write permissions
- **Cloud Storage**: The system can be extended to use cloud storage (AWS S3, etc.) if needed

### File Retention

Files are automatically deleted after the retention period (default: 30 days). You can configure this with the `FILE_RETENTION_DAYS` environment variable.

## Testing

After configuration, test the driver application form. If emails are sent successfully, you'll see a success message. If there are still errors, check:

1. The credentials are correct
2. App passwords are enabled (for Gmail/Outlook)
3. The SMTP server settings match your email provider
4. Your firewall/network isn't blocking SMTP connections
5. The upload directory has write permissions (for file storage)

## Troubleshooting

### "Invalid login" or "Authentication failed"
- Verify your `SMTP_USER` and `SMTP_PASSWORD` are correct
- For Gmail, make sure you're using an App Password, not your regular password
- Check that 2-Step Verification is enabled (required for App Passwords)

### "Connection timeout"
- Check your `SMTP_HOST` and `SMTP_PORT` settings
- Verify your firewall isn't blocking port 587
- Try port 465 with `SMTP_PORT=465` (requires `secure: true`)

### "File upload failed" or "File not found"
- Ensure the `uploads` directory exists and has write permissions
- Check that `UPLOAD_DIR` environment variable points to a valid directory
- Verify disk space is available on the server
- Check server logs for detailed error messages

### "Download link not working"
- Verify `NEXT_PUBLIC_BASE_URL` is set correctly in production
- Check that the file still exists (files are deleted after retention period)
- Ensure the API route `/api/files/download/[filename]` is accessible

### Still not working?
- Check the server console logs for detailed error messages
- Verify your email provider allows SMTP access
- Some email providers require you to enable "Less secure app access" (not recommended - use App Passwords instead)
- For file issues, check file permissions and disk space

