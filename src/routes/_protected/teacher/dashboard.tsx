import { createFileRoute } from '@tanstack/react-router'
import { Typography, Box } from '@mui/material'

export const Route = createFileRoute('/_protected/teacher/dashboard')({
  component: TeacherDashboard,
})

function TeacherDashboard() {
  return (
    <Box>
      <Typography variant="h4">Teacher Dashboard</Typography>
      <Typography variant="body1" color="text.secondary" mt={1}>
        Chào mừng giáo viên.
      </Typography>
    </Box>
  )
}
