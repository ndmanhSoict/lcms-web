import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuthStore } from '@/store/authStore'
import { ROLES } from '@/constants/roles'
import { DashboardLayout } from '@/layouts/DashboardLayout'

export const Route = createFileRoute('/_protected/staff')({
  beforeLoad: () => {
    const { user } = useAuthStore.getState()
    if (user?.role !== ROLES.STAFF) {
      throw redirect({ to: '/login' })
    }
  },
  component: DashboardLayout,
})
