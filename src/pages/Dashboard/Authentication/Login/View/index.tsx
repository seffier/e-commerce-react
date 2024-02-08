import {ILoginView} from "../ViewModel";
import {JSX} from "react";
import {Grid, InputAdornment, Stack} from "@mui/material";
import CustomInput from '../../../../../components/Custom/Inputs'
import EmailIcon from '@mui/icons-material/Email';
import CustomButton from "../../../../../components/Custom/Buttons";

const LoginView =(props: ILoginView): JSX.Element => {
    return (
        <Grid
            alignItems='center'
            alignContent='center'
            justifyContent='space-between'
            item
            xs={12}
            sx={{
                userSelect: 'none'
            }}
            padding='190px 60px 252px 60px'
            noValidate
            component='form'
            autoComplete='off'
            onSubmit={props.formik.handleSubmit}>
            <Stack
                   spacing='30px'>
                <CustomInput.TextInput
                    formik={props.formik}
                    fieldName={'email'}
                    inputProps={{
                        autoComplete: 'off',
                        startAdornment: (
                            <InputAdornment
                                position='start'
                                sx={{
                                    pb: '8px'
                                }}
                            >
                            <EmailIcon />
                            </InputAdornment>
                        ),
                        placeholder: 'E-Mail'
                    }}
                />
                <CustomInput.PasswordInput
                    formik={props.formik}
                    fieldName={'password'}
                    inputProps={{
                        placeholder: 'Password'
                    }}
                />
                <CustomButton.GeneralButton
                    xs={12}
                    buttonProps={{
                        type: 'submit'
                    }}
                >
                    Login
                </CustomButton.GeneralButton>
            </Stack>

        </Grid>
    )
}
export default LoginView