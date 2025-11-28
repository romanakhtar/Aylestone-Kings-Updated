import { writeFile, mkdir, readFile, unlink } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'
import crypto from 'crypto'

// Configuration
const UPLOAD_DIR = process.env.UPLOAD_DIR || join(process.cwd(), 'uploads')
const FILE_RETENTION_DAYS = parseInt(process.env.FILE_RETENTION_DAYS || '30')
const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB per file

// Ensure upload directory exists
export async function ensureUploadDir() {
  if (!existsSync(UPLOAD_DIR)) {
    await mkdir(UPLOAD_DIR, { recursive: true })
  }
}

// Generate a unique filename
export function generateUniqueFilename(originalName: string): string {
  const timestamp = Date.now()
  const randomString = crypto.randomBytes(8).toString('hex')
  const extension = originalName.split('.').pop() || 'bin'
  return `${timestamp}-${randomString}.${extension}`
}

// Save file to disk
export async function saveFile(file: File): Promise<{ filename: string; path: string; size: number }> {
  await ensureUploadDir()
  
  const arrayBuffer = await file.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)
  
  if (buffer.length > MAX_FILE_SIZE) {
    throw new Error(`File size exceeds maximum allowed size of ${MAX_FILE_SIZE / 1024 / 1024}MB`)
  }
  
  const filename = generateUniqueFilename(file.name)
  const filepath = join(UPLOAD_DIR, filename)
  
  await writeFile(filepath, buffer)
  
  return {
    filename,
    path: filepath,
    size: buffer.length,
  }
}

// Get file path from filename
export function getFilePath(filename: string): string {
  return join(UPLOAD_DIR, filename)
}

// Read file from disk
export async function readFileFromStorage(filename: string): Promise<Buffer> {
  const filepath = getFilePath(filename)
  
  if (!existsSync(filepath)) {
    throw new Error('File not found')
  }
  
  return await readFile(filepath)
}

// Delete file from storage
export async function deleteFile(filename: string): Promise<void> {
  const filepath = getFilePath(filename)
  
  if (existsSync(filepath)) {
    await unlink(filepath)
  }
}

// Clean up old files (can be run as a scheduled job)
export async function cleanupOldFiles(): Promise<number> {
  await ensureUploadDir()
  const files = await import('fs/promises').then(fs => fs.readdir(UPLOAD_DIR))
  const now = Date.now()
  const maxAge = FILE_RETENTION_DAYS * 24 * 60 * 60 * 1000
  let deletedCount = 0
  
  for (const file of files) {
    const filepath = join(UPLOAD_DIR, file)
    const stats = await import('fs/promises').then(fs => fs.stat(filepath))
    
    if (now - stats.mtime.getTime() > maxAge) {
      await unlink(filepath)
      deletedCount++
    }
  }
  
  return deletedCount
}

// Format file size for display
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

