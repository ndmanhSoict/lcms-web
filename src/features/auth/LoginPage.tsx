import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { TextField, Button, Box, Typography, Alert } from '@mui/material'
import { useNavigate } from '@tanstack/react-router'
import { useAuthStore } from '@/store/authStore'
import { getDefaultRouteForRole } from '@/utils/permissions'
import { ROLES } from '@/constants/roles'
import type { User } from '@/types/auth'

const loginSchema = z.object({
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(6, 'Mật khẩu ít nhất 6 ký tự'),
})

type LoginFormData = z.infer<typeof loginSchema>

const MOCK_USERS: Record<string, { user: User; password: string }> = {
  'admin@lcms.vn': {
    password: 'password',
    user: { id: '1', email: 'admin@lcms.vn', fullName: 'Admin', role: ROLES.ADMIN },
  },
  'teacher@lcms.vn': {
    password: 'password',
    user: { id: '2', email: 'teacher@lcms.vn', fullName: 'Giáo viên', role: ROLES.TEACHER },
  },
  'student@lcms.vn': {
    password: 'password',
    user: { id: '3', email: 'student@lcms.vn', fullName: 'Học sinh', role: ROLES.STUDENT },
  },
  'branch@lcms.vn': {
    password: 'password',
    user: { id: '4', email: 'branch@lcms.vn', fullName: 'Chi nhánh', role: ROLES.BRANCH },
  },
  'parent@lcms.vn': {
    password: 'password',
    user: { id: '5', email: 'parent@lcms.vn', fullName: 'Phụ huynh', role: ROLES.PARENT },
  },
  'staff@lcms.vn': {
    password: 'password',
    user: { id: '6', email: 'staff@lcms.vn', fullName: 'Nhân viên', role: ROLES.STAFF },
  },
}

export function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const { setAuth } = useAuthStore()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  async function onSubmit(data: LoginFormData) {
    setError(null)
    await new Promise((r) => setTimeout(r, 500))

    const mockEntry = MOCK_USERS[data.email]
    if (!mockEntry || mockEntry.password !== data.password) {
      setError('Email hoặc mật khẩu không đúng')
      return
    }

    setAuth(mockEntry.user, 'mock-access-token')
    navigate({ to: getDefaultRouteForRole(mockEntry.user.role) as never })
  }

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Typography variant="h6" mb={3} textAlign="center">
        Đăng nhập
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        label="Email"
        type="email"
        margin="normal"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        fullWidth
        label="Mật khẩu"
        type="password"
        margin="normal"
        {...register('password')}
        error={!!errors.password}
        helperText={errors.password?.message}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        disabled={isSubmitting}
        sx={{ mt: 3 }}
      >
        {isSubmitting ? 'Đang đăng nhập...' : 'Đăng nhập'}
      </Button>

      <Typography variant="caption" color="text.secondary" display="block" mt={2} textAlign="center">
        Demo: admin@lcms.vn / password
      </Typography>
    </Box>
  )
}
