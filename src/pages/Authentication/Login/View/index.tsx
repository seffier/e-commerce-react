import {ILoginView} from "../ViewModel";
import {JSX} from "react";
import {Grid, InputAdornment} from "@mui/material";
import CustomInput from '../../../../components/Custom/Inputs'

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
            <CustomInput.TextInput
                formik={props.formik}
                fieldName={'email'}
                inputProps={{
                    startAdornment: (
                        <InputAdornment
                            position='start'
                            sx={{
                                pb: '8px'
                            }}
                        >
                        </InputAdornment>
                    ),
                    placeholder: 'E-Mail'
                }}
            />
        </Grid>
    )
}
export default LoginView