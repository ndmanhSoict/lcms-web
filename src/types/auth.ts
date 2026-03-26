import type { Role } from '@/constants/roles'

export interface User {
  id: string
  email: string
  fullName: string
  role: Role
  avatar?: string
  branchId?: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthTokens {
  accessToken: string
}

export interface LoginResponse {
  user: User
  accessToken: string
}
