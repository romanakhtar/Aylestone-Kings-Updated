# Driver Application Form - File Upload Specifications

## File Type Restrictions

The form accepts the following file types:

- **PDF** (`.pdf`)
- **Images**: JPG (`.jpg`), JPEG (`.jpeg`), PNG (`.png`)

These restrictions are enforced by the HTML `accept` attribute on file inputs, which limits file selection in the browser.

## File Size Limits

### Per File Limit
- **Maximum: 10 MB per file**
- Each individual file must not exceed 10 MB
- Validation is performed before form submission
- If any file exceeds 10 MB, submission is blocked with an error message

### Total Size Limit
- **Maximum: 50 MB total for all files combined**
- The sum of all uploaded files must not exceed 50 MB
- Validation is performed before form submission
- If total size exceeds 50 MB, submission is blocked with an error message

## Files That Can Be Uploaded

The form includes the following file upload fields:

### Required Files:
1. **Proof of Address** - Utility bill, bank statement, or council letter
2. **Driving Licence Front** - Photo of the front of driving licence
3. **Driving Licence Back** - Photo of the back of driving licence
4. **Badge/Licence** - Taxi badge or licence document
5. **DBS Certificate** - Disclosure and Barring Service certificate

### Conditional Files:
6. **Right to Work Proof** - Required if Right to Work status is not "UK passport"
7. **Insurance Certificate** - Required if vehicle ownership is selected
8. **MOT Certificate** - Required if vehicle ownership is selected
9. **Plate Photo** - Required if vehicle ownership is selected

## Validation Behavior

### Client-Side Validation (Before Submission)
- ✅ File type validation (enforced by browser via `accept` attribute)
- ✅ Per-file size check (10 MB limit)
- ✅ Total size check (50 MB limit)
- ✅ File existence check (required fields must have a file)

### Server-Side Processing
- Files are processed as email attachments
- All files are sent via email to the configured recipient
- No additional size restrictions are enforced on the server (relying on client-side validation)

## Error Messages

### Per-File Size Exceeded
```
The following files exceed the 10MB limit:
[file name]: [size]MB

Please reduce file sizes and try again.
```

### Total Size Exceeded
```
Total file size ([total]MB) exceeds the limit of 50MB. 
Please reduce file sizes and try again.
```

### Missing Required File
```
Upload [field name].
```

## Recommendations for Users

1. **Optimize Images**: If uploading photos, consider compressing them to reduce file size
2. **Use PDF for Documents**: PDFs are often smaller than scanned images
3. **Check File Sizes**: Before submitting, verify all files are under 10 MB each
4. **Total Size**: Ensure the combined size of all files doesn't exceed 50 MB

## Technical Details

### Implementation
- File validation occurs in `app/drivers/page.tsx` in the `handleSubmit` function
- Files are processed in `app/api/drivers/route.ts` and attached to emails
- No server-side file size limits are configured (relying on client-side validation)

### Browser Compatibility
- File type restrictions work in all modern browsers
- File size validation works in all browsers that support the File API
- Older browsers may not enforce the `accept` attribute but will still validate on submission

## Troubleshooting

### "File size too large" Error
- Reduce the file size using image compression or PDF optimization tools
- Split large documents into multiple smaller files if possible
- Use online tools to compress images before uploading

### "File type not accepted" Error
- Ensure the file is one of: PDF, JPG, JPEG, or PNG
- Convert other file types to accepted formats before uploading
- Check the file extension matches the actual file type

### Files Not Uploading
- Check your internet connection
- Verify file sizes are within limits
- Try refreshing the page and uploading again
- Clear browser cache if issues persist

