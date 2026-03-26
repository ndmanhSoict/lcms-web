import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuthStore } from '@/store/authStore'
import { getDefaultRouteForRole } from '@/utils/permissions'
import { AuthLayout } from '@/layouts/AuthLayout'

export const Route = createFileRoute('/_auth')({
  beforeLoad: () => {
    const { isAuthenticated, user } = useAuthStore.getState()
    if (isAuthenticated && user) {
      throw redirect({ to: getDefaultRouteForRole(user.role) })
    }
  },
  component: AuthLayout,
})
