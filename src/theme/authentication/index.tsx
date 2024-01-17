// for Redirect
import { MuiMenu } from './menu'
import { MuiLink } from './link'
import { MuiButton } from './button'
import { MuiMenuItem } from './menuItem'
import { trTR } from '@mui/material/locale'
import { MuiButtonBase } from './buttonBase'
import { colorPalette } from './colorPalette'
import { typographyOptions } from './typography'
import { createTheme } from '@mui/material/styles'

export const authenticationTheme = createTheme(
  {
    spacing: 4,
    palette: { ...colorPalette },
    typography: { ...typographyOptions },
    components: {
      ...MuiLink,
      ...MuiButton,
      ...MuiButtonBase,
      ...MuiMenu,
      ...MuiMenuItem
    }
  },
  trTR
)
