import React from 'react'
// MaterialUI
import { Grid, Typography } from '@mui/material'
// Custom Components
import GeneralButtonStyle from './index.styled'
import { IGeneralButton } from '../Models'

const GeneralButton = (
  props: IGeneralButton
): JSX.Element => {
  return (
    <Grid xs={props.xs} container item alignItems='end'>
      <GeneralButtonStyle
        disabled={props.disabled}
        fullWidth
        style={props.style}
        {...props.buttonProps}
      >
        <Typography
          variant='body2'>
          {props.children}
        </Typography>
      </GeneralButtonStyle>
    </Grid>
  )
}

export default GeneralButton
