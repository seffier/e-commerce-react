import {FormikProps} from "formik";
import {RegisterDto} from "../Dto/register.dto";

export interface IRegisterView {
    formik: FormikProps<RegisterDto>
}