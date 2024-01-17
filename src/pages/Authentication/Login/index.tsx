import {JSX} from "react";
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