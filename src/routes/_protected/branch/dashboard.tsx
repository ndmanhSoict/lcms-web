import { createFileRoute } from '@tanstack/react-router'
import { Typography, Box } from '@mui/material'

export const Route = createFileRoute('/_protected/branch/dashboard')({
  component: BranchDashboard,
})

function BranchDashboard() {
  return (
    <Box>
      <Typography variant="h4">Branch Dashboard</Typography>
      <Typography variant="body1" color="text.secondary" mt={1}>
        Chào mừng chi nhánh.
      </Typography>
    </Box>
  )
}
