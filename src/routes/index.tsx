import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuthStore } from '@/store/authStore'
import { getDefaultRouteForRole } from '@/utils/permissions'

export const Route = createFileRoute('/')({
  beforeLoad: () => {
    const { isAuthenticated, user } = useAuthStore.getState()
    if (isAuthenticated && user) {
      throw redirect({ to: getDefaultRouteForRole(user.role) as never })
    }
    throw redirect({ to: '/login' })
  },
  component: () => null,
})
