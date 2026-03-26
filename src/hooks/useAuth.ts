import { useAuthStore } from '@/store/authStore'
import type { Role } from '@/constants/roles'

export function useAuth() {
  const { user, isAuthenticated, accessToken, setAuth, clearAuth } = useAuthStore()

  function hasRole(role: Role): boolean {
    return user?.role === role
  }

  function hasAnyRole(roles: Role[]): boolean {
    return !!user && roles.includes(user.role)
  }

  return {
    user,
    isAuthenticated,
    accessToken,
    setAuth,
    clearAuth,
    hasRole,
    hasAnyRole,
  }
}
