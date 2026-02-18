"use client"

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

const MOCK_USER: User = {
  id: "demo-user",
  email: "demo@chasmx.com",
  firstName: "Demo",
  lastName: "User",
}

export class AuthService {
  private static instance: AuthService
  private authState: AuthState = {
    user: MOCK_USER,
    isAuthenticated: true,
    isLoading: false,
  }
  private listeners: ((state: AuthState) => void)[] = []

  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService()
    }
    return AuthService.instance
  }

  subscribe(listener: (state: AuthState) => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.authState))
  }

  getState(): AuthState {
    return this.authState
  }

  async login(_email: string, _password: string): Promise<{ success: boolean; otpRequired?: boolean; error?: string }> {
    return { success: true }
  }

  async signup(_data: {
    firstName: string
    lastName: string
    email: string
    password: string
  }): Promise<{ success: boolean; requiresLogin?: boolean; error?: string }> {
    return { success: true }
  }

  async logout(): Promise<void> {
    // No-op: auth is always on in this build
  }

  async checkUserExists(_email: string): Promise<{ exists: boolean; error?: string }> {
    return { exists: false }
  }

  async verifyOTP(_email: string, _otp: string): Promise<{ success: boolean; error?: string }> {
    return { success: true }
  }

  async loginWithProvider(_provider: "google" | "github"): Promise<{ success: boolean; error?: string }> {
    return { success: true }
  }
}
