import { Box, AppBar, Toolbar, Typography, Drawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Outlet } from '@tanstack/react-router'
import { useUiStore } from '@/store/uiStore'

const DRAWER_WIDTH = 240

export function AdminLayout() {
  const { sidebarOpen, toggleSidebar } = useUiStore()

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleSidebar} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            LCMS - Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        open={sidebarOpen}
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: DRAWER_WIDTH, boxSizing: 'border-box', mt: '64px' },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Admin Navigation
          </Typography>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: '64px',
          ml: sidebarOpen ? `${DRAWER_WIDTH}px` : 0,
          transition: 'margin 0.2s ease',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  )
}
