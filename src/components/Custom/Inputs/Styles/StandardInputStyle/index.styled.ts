import { styled } from '@mui/material/styles'
import { TextField } from '@mui/material'

const StandardInputStyle = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: '9.5px 0px 9.5px 0px',
    fontSize: theme.typography.subtitle1,
    color: theme.palette.secondary.main,
    '&:hover': {
      borderColor: theme.palette.secondary.main
    },
    '&::placeholder': {
      opacity: 0.4,
      color: theme.palette.secondary.main
    }
  },
  '& .MuiInput-root': {
    color: theme.palette.secondary.main,
    borderBottom: '0px solid ' + theme.palette.secondary.main,
    '&:before': {
      transition: 'none',
      borderBottomColor: theme.palette.secondary.main
    },
    '&:after': {
      transition: 'none'
    },
    '&:hover': {
      color: theme.palette.secondary.main,
      borderBottomColor: theme.palette.secondary.main,
      '&:before': {
        borderBottomColor: theme.palette.secondary.main
      },
      '&:after': {
        transform: 'none'
      }
    }
  },
  '& label.Mui-focused': {
    color: theme.palette.secondary.main
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.secondary.main
  },
  '& .Mui-error:after': {
    borderBottomColor: theme.palette.error.main
  }
}))
export default StandardInputStyle
