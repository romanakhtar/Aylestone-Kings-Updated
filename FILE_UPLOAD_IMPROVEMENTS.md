# File Upload System Improvements

## Problem Solved

The previous implementation attached PDF files directly to emails, which caused errors when sending files larger than 2MB due to:
- Email size limits (typically 25MB total, but problematic with multiple attachments)
- SMTP connection timeouts with large files
- Memory issues when loading large files into email attachments

## Solution Implemented

Files are now uploaded to server storage and download links are sent via email instead of attachments. This approach:

✅ **Handles large files smoothly** - No email size limit issues  
✅ **Faster email delivery** - Emails send quickly without large attachments  
✅ **Better reliability** - No SMTP timeouts with large files  
✅ **Supports files up to 50MB each** - Much larger than email attachment limits

## Changes Made

### 1. File Storage System (`lib/file-storage.ts`)
- Created utility functions for file storage
- Files are stored in `./uploads` directory (configurable)
- Unique filenames generated to prevent conflicts
- Automatic cleanup of old files (configurable retention period)

### 2. File Upload API (`app/api/files/upload/route.ts`)
- New endpoint for uploading files
- Validates file type and size
- Returns download URLs for uploaded files

### 3. File Download API (`app/api/files/download/[filename]/route.ts`)
- Secure file download endpoint
- Prevents path traversal attacks
- Proper content-type headers
- Original filename preserved in email links

### 4. Updated Driver Form Handler (`app/api/drivers/route.ts`)
- Files are uploaded to storage first
- Download links are generated and included in email
- Email HTML includes clickable download links for each file
- No more email attachments - all files accessed via links

### 5. Updated Documentation
- `SMTP_SETUP_GUIDE.md` updated with file storage information
- `.gitignore` updated to exclude uploaded files

## Configuration

### Environment Variables

```env
# File Storage (Optional - defaults provided)
UPLOAD_DIR=./uploads                    # Directory for file storage
FILE_RETENTION_DAYS=30                   # Days to keep files before cleanup
NEXT_PUBLIC_BASE_URL=https://yourdomain.com  # Base URL for download links (auto-detected)
```

### File Limits

- **Per file**: 50MB maximum
- **File types**: PDF, JPG, JPEG, PNG
- **Retention**: 30 days (configurable)

## How It Works

1. User submits driver application form with files
2. Files are uploaded to server storage (`./uploads` directory)
3. Unique filenames are generated (timestamp + random string)
4. Download URLs are created for each file
5. Email is sent with download links instead of attachments
6. Recipients click links to download files
7. Files are automatically cleaned up after retention period

## Email Format

The email now includes a section like this:

```html
<h3>Uploaded Documents</h3>
<p>The following documents have been uploaded and are available for download:</p>
<ul>
  <li><strong>Proof of Address:</strong> 
    <a href="https://yourdomain.com/api/files/download/1234567890-abc123.pdf">
      proof_of_address.pdf
    </a> (2.5 MB)
  </li>
  <!-- More files... -->
</ul>
```

## Security Features

- ✅ Filename validation to prevent path traversal
- ✅ File type validation (only PDF, JPG, JPEG, PNG)
- ✅ File size limits enforced
- ✅ Unique filenames prevent conflicts
- ✅ Upload directory excluded from git

## Production Considerations

1. **Storage Location**: For production, consider using cloud storage (AWS S3, Google Cloud Storage, etc.)
2. **Base URL**: Set `NEXT_PUBLIC_BASE_URL` in production for correct download links
3. **Permissions**: Ensure upload directory has write permissions
4. **Disk Space**: Monitor disk usage if storing many files
5. **Cleanup**: Consider running cleanup job periodically (or extend to use cloud storage with lifecycle policies)

## Future Enhancements

The system can be extended to:
- Use cloud storage (AWS S3, Google Cloud Storage, Azure Blob Storage)
- Add file compression before storage
- Implement file access tokens/authentication
- Add file preview functionality
- Integrate with document management systems

## Testing

To test the new system:

1. Submit a driver application form with large PDF files (2MB+)
2. Check that email is sent quickly (no timeout)
3. Verify download links work in the email
4. Confirm files can be downloaded successfully
5. Check that files are stored in `./uploads` directory

## Troubleshooting

### Files not uploading
- Check `UPLOAD_DIR` permissions
- Verify disk space available
- Check server logs for errors

### Download links not working
- Verify `NEXT_PUBLIC_BASE_URL` is set correctly
- Check that files exist in upload directory
- Verify API route is accessible

### Files not being cleaned up
- Cleanup runs on file access (lazy cleanup)
- Consider implementing scheduled cleanup job
- Manually delete old files if needed

