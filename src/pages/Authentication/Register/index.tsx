import React, {JSX} from "react";
import RegisterView from "./View";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ROUTES} from "../../../consts/routers";
import {useNavigate} from "react-router-dom";

const Register: React.FC = (): JSX.Element => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phoneNumber: '',
            password: '',
            passwordAgain: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('This field is mandatory.'),
            email: Yup.string()
                .email('Please enter a valid email address.')
                .required('This field is mandatory.'),
            phoneNumber: Yup.string().required('This field is mandatory.'),
            password: Yup.string().required('This field is mandatory.'),
            passwordAgain: Yup.string().required('This field is mandatory.')
        }),
        onSubmit: async (values): Promise<void> => {
            console.log(values)
            navigate(ROUTES.AUTHENTICATION.LOGIN.PATH, { replace: true })
        }
    })
    return (
        <>
            <RegisterView formik={formik} />
        </>
    )
}

export default Register