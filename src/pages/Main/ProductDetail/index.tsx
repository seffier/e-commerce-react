import React, {JSX} from "react";
import ProductDetailView from "./View";
import test1 from "../../../assets/images/test1.jpg";
import test2 from "../../../assets/images/test2.jpg";

const ProductDetail: React.FC = (): JSX.Element => {
    const product = { id: 1, name: 'Product 1', imageUrl: [test1, test2, test1, test2], price: 19.99, description: 'This is product 1.', quantity: 1 }
    return (
        <>
            <ProductDetailView product={product}/>
        </>
    )
}

export default ProductDetail