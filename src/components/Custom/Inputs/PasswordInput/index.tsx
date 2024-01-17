import React, { useState } from 'react'
import StandardInputStyle from '../Styles/StandardInputStyle/index.styled'
import InputLayout from '../InputLayout'
import { IInputProps } from '../Models'
import { IconButton, InputAdornment } from '@mui/material'
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import { mainTheme } from '../../../../theme/main'
import PasswordIcon from '@mui/icons-material/Password';

const PasswordInput = (props: IInputProps): JSX.Element => {
  const iconHeight = 28
  const [isShowPassword, setShowPassword] = useState<boolean>(false)
  const handleClickShowPassword = (): void => {
    setShowPassword(!isShowPassword)
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
  }
  return (
    <>
      <InputLayout fieldName={props.fieldName} labelText={props.labelText}>
        <StandardInputStyle
          variant={'standard'}
          type={'text'}
          id={props.fieldName}
          name={props.fieldName}
          value={props.formik.values[props.fieldName]}
          placeholder={props.inputProps?.placeholder}
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          helperText={(Boolean(props.formik.touched[props.fieldName])) && props.formik.errors[props.fieldName]}
          error={(Boolean(props.formik.touched[props.fieldName])) && Boolean(props.formik.errors[props.fieldName])}
          InputProps={{
            type: isShowPassword
              ? 'text'
              : 'password',
            startAdornment: (
              <InputAdornment
                position='start'
                sx={{
                  pb: '5px'
                }}
              >
                <PasswordIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  sx={{
                    pr: 0
                  }}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {isShowPassword
                    ? (<VisibilityOutlined
                      sx={{
                        color: mainTheme.palette.common.white,
                        fontSize: iconHeight,
                        opacity: 0.3
                      }}
                    />)
                    : (<VisibilityOffOutlined
                      sx={{
                        color: mainTheme.palette.common.white,
                        fontSize: iconHeight,
                        opacity: 0.3
                      }}
                    />)}
                </IconButton>
              </InputAdornment>
            )
          }}
          {...props.formik.getFieldProps(props.fieldName)}
        />
      </InputLayout>
    </>
  )
}

export default PasswordInput
