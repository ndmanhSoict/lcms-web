import { Box, CircularProgress, Typography } from '@mui/material'

interface LoadingProps {
  message?: string
  fullScreen?: boolean
}

export function Loading({ message = 'Đang tải...', fullScreen = false }: LoadingProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={2}
      sx={fullScreen ? { minHeight: '100vh' } : { minHeight: 200 }}
    >
      <CircularProgress />
      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
    </Box>
  )
}
