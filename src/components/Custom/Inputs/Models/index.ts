import {InputProps} from "@mui/material";

export interface IInputProps {
    formik: any
    fieldName: string
    labelText?: string
    customLabelText?: boolean
    inputProps?: InputProps
}