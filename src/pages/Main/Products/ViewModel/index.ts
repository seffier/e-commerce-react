import {FormikProps} from "formik";
import {AddToCartRequestDto} from "../Dto/featuredProducts.dto";

export interface IProductsView {
    formik: FormikProps<AddToCartRequestDto>
}