import { createFileRoute } from '@tanstack/react-router'
import { Typography, Box } from '@mui/material'

export const Route = createFileRoute('/_protected/parent/dashboard')({
  component: ParentDashboard,
})

function ParentDashboard() {
  return (
    <Box>
      <Typography variant="h4">Parent Dashboard</Typography>
      <Typography variant="body1" color="text.secondary" mt={1}>
        Chào mừng phụ huynh.
      </Typography>
    </Box>
  )
}
