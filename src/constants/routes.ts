export const ROUTES = {
  LOGIN: '/login',
  ADMIN: {
    ROOT: '/admin',
    DASHBOARD: '/admin/dashboard',
  },
  BRANCH: {
    ROOT: '/branch',
    DASHBOARD: '/branch/dashboard',
  },
  TEACHER: {
    ROOT: '/teacher',
    DASHBOARD: '/teacher/dashboard',
  },
  STUDENT: {
    ROOT: '/student',
    DASHBOARD: '/student/dashboard',
  },
  PARENT: {
    ROOT: '/parent',
    DASHBOARD: '/parent/dashboard',
  },
  STAFF: {
    ROOT: '/staff',
    DASHBOARD: '/staff/dashboard',
  },
} as const
