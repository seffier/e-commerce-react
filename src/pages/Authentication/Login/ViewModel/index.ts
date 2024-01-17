import {FormikProps} from "formik";
import {LoginRequestDto} from "../Dto/login.dto";

export interface ILoginView {
 formik:FormikProps<LoginRequestDto>
}