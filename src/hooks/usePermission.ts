import { useAuth } from './useAuth'
import type { Role } from '@/constants/roles'

export function usePermission() {
  const { hasRole, hasAnyRole } = useAuth()

  function can(roles: Role | Role[]): boolean {
    if (Array.isArray(roles)) {
      return hasAnyRole(roles)
    }
    return hasRole(roles)
  }

  return { can }
}
