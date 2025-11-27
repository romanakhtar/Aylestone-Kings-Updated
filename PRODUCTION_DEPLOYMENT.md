# Production Server SMTP Configuration Guide

## Problem
Your form works locally but fails on the production server with:
```
Email service not configured. Please set SMTP_USER and SMTP_PASSWORD environment variables.
```

This happens because `.env.local` is not deployed to production (it's in `.gitignore` for security).

## Solution: Set Environment Variables on Production Server

You need to set the SMTP environment variables directly on your production server. The method depends on how you're running your Next.js application.

---

## Method 1: Using `.env.local` on Production Server (Recommended)

### Step 1: SSH into your server
```bash
ssh your-user@your-server-ip
```

### Step 2: Navigate to your project directory
```bash
cd /path/to/your/project
```

### Step 3: Create `.env.local` file on the server
```bash
nano .env.local
```

### Step 4: Add your SMTP configuration
```env
# SMTP Email Configuration
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password-here
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_FROM_EMAIL=noreply@aylestone-taxis.co.uk
DRIVER_FORM_EMAIL=info@aylestone-taxis.co.uk
```

**Important:** Replace the placeholder values with your actual credentials.

### Step 5: Save and exit
- Press `Ctrl + X`
- Press `Y` to confirm
- Press `Enter` to save

### Step 6: Set proper permissions (security)
```bash
chmod 600 .env.local
```

### Step 7: Restart your application
The method depends on how you're running Next.js:

#### If using PM2:
```bash
pm2 restart your-app-name
# or
pm2 restart all
```

#### If using systemd:
```bash
sudo systemctl restart your-app-name
```

#### If using npm/pnpm directly:
```bash
# Stop the current process (Ctrl+C) and restart:
npm run start
# or
pnpm start
```

#### If using Docker:
```bash
docker-compose restart
# or rebuild if needed:
docker-compose up -d --build
```

---

## Method 2: Using System Environment Variables

### For PM2 Users:

Create or edit your PM2 ecosystem file (`ecosystem.config.js`):

```javascript
module.exports = {
  apps: [{
    name: 'aylestone-taxis',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      SMTP_USER: 'your-email@gmail.com',
      SMTP_PASSWORD: 'your-app-password-here',
      SMTP_HOST: 'smtp.gmail.com',
      SMTP_PORT: '587',
      SMTP_FROM_EMAIL: 'noreply@aylestone-taxis.co.uk',
      DRIVER_FORM_EMAIL: 'info@aylestone-taxis.co.uk'
    }
  }]
}
```

Then restart:
```bash
pm2 restart ecosystem.config.js
```

### For systemd Users:

Edit your service file (`/etc/systemd/system/your-app.service`):

```ini
[Service]
Environment="SMTP_USER=your-email@gmail.com"
Environment="SMTP_PASSWORD=your-app-password-here"
Environment="SMTP_HOST=smtp.gmail.com"
Environment="SMTP_PORT=587"
Environment="SMTP_FROM_EMAIL=noreply@aylestone-taxis.co.uk"
Environment="DRIVER_FORM_EMAIL=info@aylestone-taxis.co.uk"
```

Then reload and restart:
```bash
sudo systemctl daemon-reload
sudo systemctl restart your-app
```

### For Docker Users:

Add to your `docker-compose.yml`:

```yaml
services:
  app:
    environment:
      - SMTP_USER=your-email@gmail.com
      - SMTP_PASSWORD=your-app-password-here
      - SMTP_HOST=smtp.gmail.com
      - SMTP_PORT=587
      - SMTP_FROM_EMAIL=noreply@aylestone-taxis.co.uk
      - DRIVER_FORM_EMAIL=info@aylestone-taxis.co.uk
```

Or use an `.env` file with Docker:
```bash
docker-compose --env-file .env.production up -d
```

---

## Method 3: Using Export Commands (Temporary - Not Recommended)

⚠️ **Note:** This only works for the current session and will be lost after logout.

```bash
export SMTP_USER=your-email@gmail.com
export SMTP_PASSWORD=your-app-password-here
export SMTP_HOST=smtp.gmail.com
export SMTP_PORT=587
export SMTP_FROM_EMAIL=noreply@aylestone-taxis.co.uk
export DRIVER_FORM_EMAIL=info@aylestone-taxis.co.uk
```

Then restart your application.

---

## Verifying Environment Variables Are Set

### Check if variables are loaded:

#### For PM2:
```bash
pm2 show your-app-name | grep SMTP
```

#### For systemd:
```bash
sudo systemctl show your-app --property=Environment
```

#### For any Node.js process:
Create a test file `test-env.js`:
```javascript
console.log('SMTP_USER:', process.env.SMTP_USER ? 'SET' : 'NOT SET')
console.log('SMTP_PASSWORD:', process.env.SMTP_PASSWORD ? 'SET' : 'NOT SET')
```

Run it:
```bash
node test-env.js
```

Then delete the test file:
```bash
rm test-env.js
```

---

## Getting SMTP Credentials

### For Gmail:
1. Enable 2-Step Verification: https://myaccount.google.com/security
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Use the 16-character password (spaces don't matter)

### For Outlook/Hotmail:
1. Enable 2-Step Verification: https://account.microsoft.com/security
2. Generate App Password from "App passwords" section
3. Use the generated password

### For Other Providers:
Check your email provider's SMTP documentation for:
- SMTP host
- SMTP port (usually 587 or 465)
- Authentication requirements

---

## Security Best Practices

1. ✅ **Never commit `.env.local` to git** (already in `.gitignore`)
2. ✅ **Use App Passwords** instead of your main email password
3. ✅ **Set restrictive file permissions**: `chmod 600 .env.local`
4. ✅ **Don't share credentials** in chat, email, or documentation
5. ✅ **Rotate passwords** periodically
6. ✅ **Use environment-specific files**: `.env.production`, `.env.staging`

---

## Troubleshooting

### Variables not loading after restart?
- Make sure you restarted the application (not just the server)
- Check that the file is in the correct location (project root)
- Verify file permissions are correct
- Check application logs for errors

### Still getting "Email service not configured"?
1. Verify variables are set: Check using verification methods above
2. Check spelling: `SMTP_USER` and `SMTP_PASSWORD` (case-sensitive)
3. Check for extra spaces or quotes in the `.env.local` file
4. Ensure no trailing spaces after the values
5. Restart the application after making changes

### Application won't start?
- Check server logs: `pm2 logs` or `journalctl -u your-app`
- Verify `.env.local` syntax (no quotes needed around values)
- Check that all required variables are set

---

## Quick Checklist

- [ ] SSH into production server
- [ ] Created `.env.local` file in project root
- [ ] Added all SMTP environment variables
- [ ] Set proper file permissions (`chmod 600 .env.local`)
- [ ] Restarted the application
- [ ] Verified variables are loaded
- [ ] Tested form submission

---

## Need Help?

If you're still having issues:
1. Check your application logs for detailed error messages
2. Verify your SMTP credentials work (test with a simple email client)
3. Check your firewall isn't blocking SMTP ports (587, 465)
4. Verify your email provider allows SMTP access from your server IP

