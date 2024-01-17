import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { colorPalette } from './colorPalette'

let theme = createTheme()
theme = responsiveFontSizes(theme)
const convertPxToRem = (pxValue: number, baseFontSize: number = 16): string => {
  return `${pxValue / baseFontSize}rem`
}
export const typographyOptions = {
  fontFamily: ['Montserrat', 'sans-serif'].join(','),
  htmlFontSize: 18,
  fontSize: 14,
  h1: {
    fontSize: convertPxToRem(35),
    fontWeight: 'bold',
    color: colorPalette.secondary.main,
    lineHeight: 1.4,
    [theme.breakpoints.down('lg')]: {
      fontSize: convertPxToRem(30)
    },
    [theme.breakpoints.down('md')]: {
      fontSize: convertPxToRem(25)
    }
  },
  h2: {
    fontSize: convertPxToRem(35),
    fontWeight: 'normal',
    color: colorPalette.secondary.main,
    lineHeight: 1.4,
    [theme.breakpoints.down('lg')]: {
      fontSize: convertPxToRem(30)
    },
    [theme.breakpoints.down('md')]: {
      fontSize: convertPxToRem(25)
    }
  },
  h3: {
    fontSize: convertPxToRem(30),
    fontWeight: 'bold',
    color: colorPalette.secondary.main,
    lineHeight: 1.4,
    [theme.breakpoints.down('lg')]: {
      fontSize: convertPxToRem(25)
    },
    [theme.breakpoints.down('md')]: {
      fontSize: convertPxToRem(20)
    }
  },
  h4: {
    fontSize: convertPxToRem(30),
    fontWeight: 'normal',
    color: colorPalette.secondary.main,
    lineHeight: 1.4,
    [theme.breakpoints.down('lg')]: {
      fontSize: convertPxToRem(25)
    },
    [theme.breakpoints.down('md')]: {
      fontSize: convertPxToRem(20)
    }
  },
  h5: {
    fontSize: convertPxToRem(26),
    fontWeight: 'bold',
    color: colorPalette.secondary.main,
    lineHeight: 1.4,
    [theme.breakpoints.down('lg')]: {
      fontSize: convertPxToRem(22)
    },
    [theme.breakpoints.down('md')]: {
      fontSize: convertPxToRem(18)
    }
  },
  h6: {
    fontSize: convertPxToRem(20),
    fontWeight: 'bold',
    color: colorPalette.secondary.main,
    lineHeight: 1.4,
    [theme.breakpoints.down('lg')]: {
      fontSize: convertPxToRem(18)
    },
    [theme.breakpoints.down('md')]: {
      fontSize: convertPxToRem(16)
    }
  },
  body1: {
    fontSize: convertPxToRem(20),
    fontWeight: 'normal',
    color: colorPalette.secondary.main,
    lineHeight: 1.4,
    [theme.breakpoints.down('lg')]: {
      fontSize: convertPxToRem(18)
    },
    [theme.breakpoints.down('md')]: {
      fontSize: convertPxToRem(16)
    }
  },
  body2: {
    fontSize: convertPxToRem(18),
    fontWeight: 'bold',
    color: colorPalette.secondary.main,
    lineHeight: 1.4,
    [theme.breakpoints.down('lg')]: {
      fontSize: convertPxToRem(16)
    },
    [theme.breakpoints.down('md')]: {
      fontSize: convertPxToRem(14)
    }
  },
  subtitle1: {
    fontSize: convertPxToRem(18),
    fontWeight: 'normal',
    color: colorPalette.secondary.main,
    lineHeight: 1.4,
    [theme.breakpoints.down('lg')]: {
      fontSize: convertPxToRem(16)
    },
    [theme.breakpoints.down('md')]: {
      fontSize: convertPxToRem(14)
    }
  },
  subtitle2: {
    fontSize: convertPxToRem(16),
    fontWeight: 'bold',
    color: colorPalette.secondary.main,
    lineHeight: 1.4,
    [theme.breakpoints.down('lg')]: {
      fontSize: convertPxToRem(14)
    },
    [theme.breakpoints.down('md')]: {
      fontSize: convertPxToRem(12)
    }
  },
  caption: {
    fontSize: convertPxToRem(16),
    fontWeight: 'normal',
    color: colorPalette.secondary.main,
    lineHeight: 1.4,
    [theme.breakpoints.down('lg')]: {
      fontSize: convertPxToRem(14)
    },
    [theme.breakpoints.down('md')]: {
      fontSize: convertPxToRem(12)
    }
  },
  overline: {
    fontSize: convertPxToRem(14),
    fontWeight: 'normal',
    color: colorPalette.secondary.main,
    lineHeight: 1.4,
    [theme.breakpoints.down('lg')]: {
      fontSize: convertPxToRem(12)
    },
    [theme.breakpoints.down('md')]: {
      fontSize: convertPxToRem(10)
    }
  }
}
