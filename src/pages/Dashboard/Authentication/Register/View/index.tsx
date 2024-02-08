import {JSX} from "react";
import {Grid, InputAdornment, Link, Stack, Typography} from "@mui/material";
import {IRegisterView} from "../ViewModel";
import {ROUTES} from "../../../../../consts/routers";
import CustomInput from "../../../../../components/Custom/Inputs";
import CustomButton from "../../../../../components/Custom/Buttons";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';

const RegisterView = (props: IRegisterView): JSX.Element => {
    return (
        <Grid
            xs={12}
            item
            alignItems='center'
            alignContent='center'
            justifyContent='space-between'
            noValidate
            component='form'
            autoComplete='off'
            onSubmit={props.formik.handleSubmit}
            sx={{
                userSelect: 'none'
            }}
            padding='75px 62px 75px 62px'
        >
            <Stack spacing='45px'>
                <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography
                        variant='h4'
                    >
                        Create an Account
                    </Typography>
                    <Link
                        href={ROUTES.AUTHENTICATION.LOGIN.PATH}
                    >
                        <Typography variant='body2' sx={{ textDecoration: 'underline' }}>
                            Login
                        </Typography>
                    </Link>
                </Stack>
                <CustomInput.TextInput
                    formik={props.formik}
                    fieldName={'fullName'}
                    inputProps={{
                        startAdornment: (<InputAdornment
                            position='start'
                            sx={{
                                pb: '8px'
                            }}
                        >
                            <PersonIcon />
                        </InputAdornment>),
                        placeholder: 'Name Surname'
                    }}
                />
                <CustomInput.TextInput
                    formik={props.formik}
                    fieldName={'email'}
                    inputProps={{
                        startAdornment: (<InputAdornment
                            position='start'
                            sx={{
                                pb: '8px'
                            }}
                        >
                            <EmailIcon />
                        </InputAdornment>),
                        placeholder: 'E-Mail'
                    }}
                />
                <CustomInput.TextInput
                    formik={props.formik}
                    fieldName={'phoneNumber'}
                    inputProps={{
                        startAdornment: (<InputAdornment
                            position='start'
                            sx={{
                                pb: '8px'
                            }}
                        >
                            <PhoneIcon />
                        </InputAdornment>),
                        placeholder: 'Phone Number'
                    }}
                />
                <CustomInput.PasswordInput
                    formik={props.formik}
                    fieldName={'password'}
                    inputProps={{
                        placeholder: 'Password'
                    }}
                />
                <CustomInput.PasswordInput
                    formik={props.formik}
                    fieldName={'passwordAgain'}
                    inputProps={{
                        placeholder: 'Password Again'
                    }}
                />
                <CustomButton.GeneralButton
                    xs={12}
                    buttonProps={{
                        type: 'submit'
                    }}
                >
                    Register
                </CustomButton.GeneralButton>
            </ Stack>
        </ Grid>
    )
}

export default RegisterView