import { NextRequest, NextResponse } from 'next/server'
import { saveFile } from '@/lib/file-storage'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }
    
    // Validate file type
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
    const allowedExtensions = ['.pdf', '.jpg', '.jpeg', '.png']
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase()
    
    if (!allowedTypes.includes(file.type) && !allowedExtensions.includes(fileExtension)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only PDF, JPG, JPEG, and PNG files are allowed.' },
        { status: 400 }
      )
    }
    
    // Validate file size (50MB max)
    const maxSize = 50 * 1024 * 1024 // 50MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: `File size exceeds maximum allowed size of ${maxSize / 1024 / 1024}MB` },
        { status: 400 }
      )
    }
    
    // Save file
    const savedFile = await saveFile(file)
    
    // Return file info with download token
    return NextResponse.json({
      success: true,
      filename: savedFile.filename,
      originalName: file.name,
      size: savedFile.size,
      downloadUrl: `/api/files/download/${savedFile.filename}`,
    })
  } catch (error) {
    console.error('File upload error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to upload file',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

