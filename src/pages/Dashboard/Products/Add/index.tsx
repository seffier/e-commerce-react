import React, {JSX} from "react";
import DashboardAddProductsView from "../Add/View";
import {useFormik} from "formik";
import * as Yup from "yup";

const DashboardAddProducts: React.FC = (): JSX.Element => {
    const formik = useFormik({
        initialValues: {
            productName: '',
            productDescription: '',
            price: 0,
            productCategory: '',
            productBrand: ''
        },
        validationSchema: Yup.object({
            productName: Yup.string().required('This field is mandatory')
        }),
        onSubmit: async (values): Promise<void> => {
            console.log(values)
        }
    })
    return (
        <>
            <DashboardAddProductsView formik={formik} />
        </>
    )
}

export default DashboardAddProducts