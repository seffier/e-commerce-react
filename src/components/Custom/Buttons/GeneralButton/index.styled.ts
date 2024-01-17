import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

const GeneralButtonStyle = styled(Button)(({ theme, disabled }) => ({
  height: '47px',
  border: '1px solid #000000',
  color: disabled
    ? theme.palette.text.disabled
    : theme.palette.info.main,
  background: theme.palette.secondary.main,
  borderRadius: '9px',
  fontSize: theme.typography.h6.fontSize,
  opacity: disabled
    ? 0.4
    : 1, // Opaklık ayarı
  '&:hover': {
    fontSize: theme.typography.h6.fontSize,
    background: theme.palette.grey.A200,
    color: disabled
      ? theme.palette.text.disabled
      : theme.palette.success.dark,
    '& .MuiTypography-root': {
      color: disabled
        ? theme.palette.text.disabled
        : theme.palette.common.black
    }
  },
  '& .MuiTypography-root': {
    color: disabled
      ? theme.palette.text.disabled
      : theme.palette.common.black
  }
}))

export default GeneralButtonStyle
