// Index
import React from 'react'
import { Container, Grid, ThemeProvider, Typography, useTheme } from '@mui/material'
import { LeftContainer } from './leftContainer.styled'
import { RightContainer } from './rightContainer.styled'
import { authenticationTheme } from '../../../../../theme/authentication'

interface ICustomAuthenticationLayout {
  children?: React.ReactNode
}

const CustomAuthenticationLayout: React.FC<ICustomAuthenticationLayout> = (props): JSX.Element => {
  const theme = useTheme()

  return (
    <ThemeProvider theme={authenticationTheme}>
      <Container disableGutters maxWidth={false}>
        <Grid container>
          <LeftContainer item xs={6.38}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant='h5' display='inline-block'
                            sx={{
                              px: 3,
                              mb: '2px',
                              fontSize: 35,
                              fontWeight: 300,
                              color: theme.palette.common.white,
                              background: theme.palette.secondary.dark
                            }}>
                  LOREM IPSUM
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h5' display='inline-block'
                            sx={{
                              px: 3,
                              fontSize: 35,
                              fontWeight: 'bold',
                              color: theme.palette.common.white,
                              background: theme.palette.secondary.dark
                            }}>
                  LOREM IPSUM
                </Typography>
              </Grid>
            </Grid>
          </LeftContainer>
          <RightContainer item xs={5.62} sx={{
            maxHeight: '100vh',
            overflowY: 'auto',
            position: 'sticky',
            top: 0
          }}>
            <Grid item xs={12} sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              paddingX: '60'
            }}>
              {props.children}
            </Grid>
          </RightContainer>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default CustomAuthenticationLayout
