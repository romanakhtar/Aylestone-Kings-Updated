import { NextRequest, NextResponse } from 'next/server'
import { readFileFromStorage, getFilePath } from '@/lib/file-storage'
import { existsSync } from 'fs'
import { stat } from 'fs/promises'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> | { filename: string } }
) {
  try {
    const resolvedParams = await Promise.resolve(params)
    const filename = resolvedParams.filename
    
    // Security: Validate filename to prevent path traversal
    if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
      return NextResponse.json(
        { error: 'Invalid filename' },
        { status: 400 }
      )
    }
    
    const filepath = getFilePath(filename)
    
    if (!existsSync(filepath)) {
      return NextResponse.json(
        { error: 'File not found' },
        { status: 404 }
      )
    }
    
    // Read file
    const fileBuffer = await readFileFromStorage(filename)
    const stats = await stat(filepath)
    
    // Determine content type
    let contentType = 'application/octet-stream'
    if (filename.endsWith('.pdf')) {
      contentType = 'application/pdf'
    } else if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
      contentType = 'image/jpeg'
    } else if (filename.endsWith('.png')) {
      contentType = 'image/png'
    }
    
    // Return file with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Length': stats.size.toString(),
        'Content-Disposition': `attachment; filename="document${filename.substring(filename.lastIndexOf('.'))}"`, // Use extension from stored filename
        'Cache-Control': 'private, max-age=3600', // Cache for 1 hour
      },
    })
  } catch (error) {
    console.error('File download error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to download file',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

