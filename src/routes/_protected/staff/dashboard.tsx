import { createFileRoute } from '@tanstack/react-router'
import { Typography, Box } from '@mui/material'

export const Route = createFileRoute('/_protected/staff/dashboard')({
  component: StaffDashboard,
})

function StaffDashboard() {
  return (
    <Box>
      <Typography variant="h4">Staff Dashboard</Typography>
      <Typography variant="body1" color="text.secondary" mt={1}>
        Chào mừng nhân viên.
      </Typography>
    </Box>
  )
}
