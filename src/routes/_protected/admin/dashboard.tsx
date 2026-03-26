import { createFileRoute } from '@tanstack/react-router'
import { Typography, Box } from '@mui/material'

export const Route = createFileRoute('/_protected/admin/dashboard')({
  component: AdminDashboard,
})

function AdminDashboard() {
  return (
    <Box>
      <Typography variant="h4">Admin Dashboard</Typography>
      <Typography variant="body1" color="text.secondary" mt={1}>
        Chào mừng đến với trang quản trị.
      </Typography>
    </Box>
  )
}
