import React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from "../../../../components/Custom/Cards/ProductCard";
import {IProductsView} from "../ViewModel";
import test1 from '../../../../assets/images/test1.jpg'
import {Typography} from "@mui/material";

const products = [
    // Example product data
    { id: 1, name: 'Product 1', imageUrl: test1, price: 19.99, description: 'This is product 1.' },
    { id: 2, name: 'Product 2', imageUrl: test1, price: 29.99, description: 'This is product 2.' },
    { id: 3, name: 'Product 3', imageUrl: test1, price: 19.99, description: 'This is product 3.' },
    { id: 4, name: 'Product 4', imageUrl: test1, price: 19.99, description: 'This is product 4.' },
    { id: 5, name: 'Product 5', imageUrl: test1, price: 19.99, description: 'This is product 5.' },
    { id: 6, name: 'Product 6', imageUrl: test1, price: 19.99, description: 'This is product 6.' },
    { id: 7, name: 'Product 7', imageUrl: test1, price: 19.99, description: 'This is product 7.' },
    { id: 8, name: 'Product 8', imageUrl: test1, price: 19.99, description: 'This is product 8.' }
    // Add more products as needed
]
const ProductsView = (props: IProductsView) => {
    return (
        <div>
            <Typography variant="h4" component="h2" sx={{ margin: 2 }}>
                New Arrivals
            </Typography>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default ProductsView