import { Grid } from '@mui/material'
import { styled } from '@mui/system'

export const LeftContainer = styled(Grid)(({ theme }) => ({
  height: '100vh',
  overflow: 'auto',
  padding: '75px 0px 0px 60px',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: 'url(\'https://img.freepik.com/free-photo/laptop-blank-screen-hopping-cart-full-gifts-with-copyspace-online-shopping-concept_1423-89.jpg?w=1380&t=st=1705495655~exp=1705496255~hmac=36249bd06af1905047f903bbb6112005316ed6680d5b5e433822d3b8f70d22f8\')',
  position: 'sticky',
  top: 0,
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    backgroundImage: 'none',
    paddingBottom: theme.spacing(3)
  }
}))
