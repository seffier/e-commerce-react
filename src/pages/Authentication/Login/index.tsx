import {JSX} from "react";
import LoginView from "./View";
import {useFormik} from "formik";

const Login: React.FC = ():JSX.Element => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false
        },
        onSubmit: async (values): Promise<void> => {
            console.log(values)
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