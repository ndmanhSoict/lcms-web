export const queryKeys = {
  auth: {
    me: () => ['auth', 'me'] as const,
  },
  students: {
    all: () => ['students'] as const,
    list: (params?: Record<string, unknown>) => ['students', 'list', params] as const,
    detail: (id: string) => ['students', 'detail', id] as const,
  },
  classes: {
    all: () => ['classes'] as const,
    list: (params?: Record<string, unknown>) => ['classes', 'list', params] as const,
    detail: (id: string) => ['classes', 'detail', id] as const,
  },
  attendance: {
    all: () => ['attendance'] as const,
    byClass: (classId: string) => ['attendance', 'class', classId] as const,
  },
  finance: {
    all: () => ['finance'] as const,
  },
  notifications: {
    all: () => ['notifications'] as const,
    list: (params?: Record<string, unknown>) => ['notifications', 'list', params] as const,
  },
} as const
