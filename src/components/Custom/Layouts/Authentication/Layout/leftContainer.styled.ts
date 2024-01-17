import { Grid } from '@mui/material'
import { styled } from '@mui/system'

export const LeftContainer = styled(Grid)(({ theme }) => ({
  height: '100vh',
  overflow: 'auto',
  padding: '75px 0px 0px 60px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: 'url(\'https://img.freepik.com/premium-vector/friendly-volunteer-feeding-dog-street-animal-shelter-pound-young-man-giving-bowl-homeless-puppy_1016-13733.jpg?w=740\')',
  position: 'sticky',
  top: 0,
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    backgroundImage: 'none',
    paddingBottom: theme.spacing(3)
  }
}))
