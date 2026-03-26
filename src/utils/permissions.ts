import { ROLES } from '@/constants/roles'
import type { Role } from '@/constants/roles'
import { ROUTES } from '@/constants/routes'

export function getDefaultRouteForRole(role: Role): string {
  const roleRouteMap: Record<Role, string> = {
    [ROLES.ADMIN]: ROUTES.ADMIN.DASHBOARD,
    [ROLES.BRANCH]: ROUTES.BRANCH.DASHBOARD,
    [ROLES.TEACHER]: ROUTES.TEACHER.DASHBOARD,
    [ROLES.STUDENT]: ROUTES.STUDENT.DASHBOARD,
    [ROLES.PARENT]: ROUTES.PARENT.DASHBOARD,
    [ROLES.STAFF]: ROUTES.STAFF.DASHBOARD,
  }
  return roleRouteMap[role] || ROUTES.LOGIN
}
