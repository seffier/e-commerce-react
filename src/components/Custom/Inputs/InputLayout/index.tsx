import React, { ReactElement } from 'react'
import { FormControl, Typography } from '@mui/material'
import { getIn } from 'formik'

const InputLayout = (props: {
  fieldName: string
  labelText?: string
  children?: ReactElement
  customLabelText?: boolean
  disabled?: boolean
  formik?: any
  color?: string
}): JSX.Element => {
  return <FormControl fullWidth>
    {props.labelText && (
      <label htmlFor={props.fieldName} style={{ marginBottom: '15px' }}>
        <Typography
          variant='subtitle1'
          sx={{
            opacity: props.disabled
              ? 0.4
              : 1
          }}
          fontWeight='bold'
          color={
            props.color !== null
              ? props.color
              : (Boolean(getIn(props.formik.touched, props.fieldName))) && Boolean(getIn(props.formik.errors, props.fieldName))
                  ? 'error'
                  : 'secondary'
          }
        >
          {
            props.labelText
          }
        </Typography>
      </label>
    )}
    {props.children}
  </FormControl>
}
export default InputLayout
