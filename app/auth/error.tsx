'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface AuthErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

/**
 * Error boundary specifically for authentication flows
 * Provides user-friendly error messages and recovery options
 */
export default function AuthError({
  error,
  reset,
}: AuthErrorProps) {
  useEffect(() => {
    // Log auth errors for monitoring
    console.error('Auth error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertCircle className="h-6 w-6 text-destructive" />
          </div>
          <div>
            <CardTitle className="text-xl">Authentication Error</CardTitle>
            <CardDescription className="mt-2">
              We encountered an issue with your authentication request.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Button onClick={reset} className="w-full" variant="default">
              Try Again
            </Button>
            <Button asChild className="w-full" variant="outline">
              <Link href="/auth/login">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Login
              </Link>
            </Button>
          </div>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 rounded-md bg-muted p-3 text-sm">
              <summary className="cursor-pointer font-medium text-muted-foreground">
                Developer Info
              </summary>
              <pre className="mt-2 text-xs text-muted-foreground whitespace-pre-wrap">
                {error.message}
              </pre>
            </details>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
