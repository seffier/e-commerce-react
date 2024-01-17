import React from 'react'
import { ButtonProps } from '@mui/material'

export interface IGeneralButton {
  children: React.ReactNode
  xs: number
  style?: React.CSSProperties
  buttonProps: ButtonProps
  disabled?: boolean
}

