import React, {JSX} from "react";
import * as Yup from 'yup'
import LoginView from "./View";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../consts/routers";

const Login: React.FC = ():JSX.Element => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Please enter a valid email address.')
                .required('This field is mandatory.'),
            password: Yup.string().required('This field is mandatory.')
        }),
        onSubmit: async (values): Promise<void> => {
            console.log(values)
            navigate(ROUTES.INDEX.PATH, { replace: true })
        }
    })

    return (
        <>
            <LoginView
                formik={formik}
            />
        </>
    )
}

export default Login