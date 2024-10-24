'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { AlertCircle, Check, Copy } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Component() {
  const [driveLink, setDriveLink] = useState('')
  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')
  const [embeddableLink, setEmbeddableLink] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const extractFileId = (url: string) => {
    const match = url.match(/\/d\/(.+?)\//)
    return match ? match[1] : null
  }

  const generateEmbeddableLink = () => {
    const fileId = extractFileId(driveLink)
    if (!fileId) {
      setError('Invalid Google Drive link. Please make sure it\'s a valid sharing link.')
      setEmbeddableLink('')
      return
    }

    if (!height || !width || isNaN(Number(height)) || isNaN(Number(width))) {
      setError('Please enter valid numbers for height and width.')
      setEmbeddableLink('')
      return
    }

    const link = `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}-h${height}`
    setEmbeddableLink(link)
    setError('')
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embeddableLink).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className='mt-[200px]'>
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Google Drive Image Embedder</h1>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="driveLink">Google Drive Image Link</Label>
          <Input
            id="driveLink"
            placeholder="https://drive.google.com/file/d/..."
            value={driveLink}
            onChange={(e) => setDriveLink(e.target.value)}
          />
        </div>
        
        <div className="flex space-x-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="height">Height</Label>
            <Input
              id="height"
              type="number"
              placeholder="Height in pixels"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="width">Width</Label>
            <Input
              id="width"
              type="number"
              placeholder="Width in pixels"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
        </div>
        
        <Button onClick={generateEmbeddableLink} className="w-full">
          Generate Embeddable Link
        </Button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {embeddableLink && (
        <div className="space-y-2">
          <Label htmlFor="embeddableLink">Embeddable Link</Label>
          <div className="flex">
            <Input
              id="embeddableLink"
              value={embeddableLink}
              readOnly
              className="flex-grow"
            />
            <Button
              onClick={copyToClipboard}
              className="ml-2"
              variant="outline"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Use this link to embed the image in your website or HTML.
          </p>
        </div>
      )}
    </div>
    </div>
  )
}