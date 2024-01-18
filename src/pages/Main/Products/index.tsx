import React, {JSX} from "react";
import ProductsView from "./View";
import {useFormik} from "formik";

const Products: React.FC = (): JSX.Element => {
    console.log('hello products')
    const formik = useFormik({
        initialValues: {
            id: 1
        },
        onSubmit: async (values): Promise<void> => {
            console.log(values)
        }
    })
    return (
        <>
            <ProductsView formik={formik}/>
        </>
    )
}

export default Products