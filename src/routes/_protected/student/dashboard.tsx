import { createFileRoute } from '@tanstack/react-router'
import { Typography, Box } from '@mui/material'

export const Route = createFileRoute('/_protected/student/dashboard')({
  component: StudentDashboard,
})

function StudentDashboard() {
  return (
    <Box>
      <Typography variant="h4">Student Dashboard</Typography>
      <Typography variant="body1" color="text.secondary" mt={1}>
        Chào mừng học sinh.
      </Typography>
    </Box>
  )
}
