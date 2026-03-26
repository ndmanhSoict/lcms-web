import { ROLES } from '@/constants/roles'
import type { Role } from '@/constants/roles'
import { ROUTES } from '@/constants/routes'

export type RoleDashboardPath =
  | typeof ROUTES.ADMIN.DASHBOARD
  | typeof ROUTES.BRANCH.DASHBOARD
  | typeof ROUTES.TEACHER.DASHBOARD
  | typeof ROUTES.STUDENT.DASHBOARD
  | typeof ROUTES.PARENT.DASHBOARD
  | typeof ROUTES.STAFF.DASHBOARD
  | typeof ROUTES.LOGIN

export function getDefaultRouteForRole(role: Role): RoleDashboardPath {
  const roleRouteMap: Record<Role, RoleDashboardPath> = {
    [ROLES.ADMIN]: ROUTES.ADMIN.DASHBOARD,
    [ROLES.BRANCH]: ROUTES.BRANCH.DASHBOARD,
    [ROLES.TEACHER]: ROUTES.TEACHER.DASHBOARD,
    [ROLES.STUDENT]: ROUTES.STUDENT.DASHBOARD,
    [ROLES.PARENT]: ROUTES.PARENT.DASHBOARD,
    [ROLES.STAFF]: ROUTES.STAFF.DASHBOARD,
  }
  return roleRouteMap[role] ?? ROUTES.LOGIN
}
