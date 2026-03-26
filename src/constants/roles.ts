export const ROLES = {
  ADMIN: 'admin',
  BRANCH: 'branch',
  TEACHER: 'teacher',
  STUDENT: 'student',
  PARENT: 'parent',
  STAFF: 'staff',
} as const

export type Role = (typeof ROLES)[keyof typeof ROLES]
