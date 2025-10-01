import { useLocation } from 'react-router-dom'
import DashboardRoutes from './dashboard'
import PublicRoutes from './public'

export default function Router() {
  const { pathname } = useLocation()
  
  const isDashboardRoute = pathname.startsWith('/dashboard')

  return isDashboardRoute ? <DashboardRoutes /> : <PublicRoutes />
}
