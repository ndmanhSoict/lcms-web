import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuthStore } from '@/store/authStore'
import { ROLES } from '@/constants/roles'
import { AdminLayout } from '@/layouts/AdminLayout'

export const Route = createFileRoute('/_protected/admin')({
  beforeLoad: () => {
    const { user } = useAuthStore.getState()
    if (user?.role !== ROLES.ADMIN) {
      throw redirect({ to: '/login' })
    }
  },
  component: AdminLayout,
})
