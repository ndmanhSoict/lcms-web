import { Box, Paper, Typography } from '@mui/material'
import { Outlet } from '@tanstack/react-router'

export function AuthLayout() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 440 }}>
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography variant="h5" fontWeight={700} color="primary">
            LCMS
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Learning Center Management System
          </Typography>
        </Box>
        <Outlet />
      </Paper>
    </Box>
  )
}
