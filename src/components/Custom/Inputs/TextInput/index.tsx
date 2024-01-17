import {JSX} from "react";
import {IInputProps} from "../Models";
import InputLayout from "../InputLayout";
import StandardInputStyle from '../Styles/StandardInputStyle/index.styled'
import {getIn} from "formik";

const TextInput = (
    props: IInputProps
): JSX.Element => {
    return (
        <InputLayout fieldName={props.fieldName} labelText={props.labelText} formik={props.formik}
                     customLabelText={props.customLabelText} disabled={props.inputProps?.disabled}>
            <StandardInputStyle
                variant={'standard'}
                type={'text'}
                id={props.fieldName}
                InputProps={props.inputProps}
                name={props.fieldName}
                value={getIn(props.formik.values, props.fieldName)}
                onChange={props.formik.handleChange}
                onBlur={props.formik.handleBlur}
                helperText={(Boolean(getIn(props.formik.touched, props.fieldName))) && getIn(props.formik.errors, props.fieldName)}
                error={(Boolean(getIn(props.formik.touched, props.fieldName))) && Boolean(getIn(props.formik.errors, props.fieldName))}
                placeholder={props.inputProps?.placeholder}
                disabled={props.inputProps?.disabled}
                {...props.formik.getFieldProps(props.fieldName)}

            />

        </InputLayout>
    )
}
export default TextInput