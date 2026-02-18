"use client"

import type React from "react"

interface AuthGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
  redirectTo?: string
}

export function AuthGuard({ children }: AuthGuardProps) {
  return <>{children}</>
}
