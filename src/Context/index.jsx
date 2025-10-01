import CssBaseline from '@mui/material/CssBaseline'
import { useMemo, createContext } from 'react'
import { ThemeProvider } from '@mui/material'
import getTheme from '../Theme'

export const AppThemeContext = createContext()

export default function AppThemeProvider({ children }) {
  const mode = 'light'

  const theme = useMemo(() => getTheme(mode), [mode])

  return (
    <AppThemeContext.Provider value={{ mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}
