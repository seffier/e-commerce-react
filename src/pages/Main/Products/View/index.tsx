import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from "../../../../components/Custom/Cards/ProductCard";
import {IProductsView} from "../ViewModel";
import test1 from '../../../../assets/images/test1.jpg'
import { List, ListItem, ListItemText, Typography} from "@mui/material";
const products = [
    // Example product data
    { id: 1, name: 'Product 1', imageUrl: test1, price: 19.99, description: 'This is product 1.', quantity: 1 },
    { id: 2, name: 'Product 2', imageUrl: test1, price: 29.99, description: 'This is product 2.', quantity: 1 },
    { id: 3, name: 'Product 3', imageUrl: test1, price: 19.99, description: 'This is product 3.', quantity: 1 },
    { id: 4, name: 'Product 4', imageUrl: test1, price: 19.99, description: 'This is product 4.', quantity: 1 },
    { id: 5, name: 'Product 5', imageUrl: test1, price: 19.99, description: 'This is product 5.', quantity: 1 },
    { id: 6, name: 'Product 6', imageUrl: test1, price: 19.99, description: 'This is product 6.', quantity: 1 },
    { id: 7, name: 'Product 7', imageUrl: test1, price: 19.99, description: 'This is product 7.', quantity: 1 },
    { id: 8, name: 'Product 8', imageUrl: test1, price: 19.99, description: 'This is product 8.', quantity: 1 },
    { id: 9, name: 'Product 9', imageUrl: test1, price: 19.99, description: 'This is product 9.', quantity: 1 },
]
const categories = ['All', 'Notebooks', 'Mobile Devices', 'Headphones', 'TV', 'Games'];

const ProductsView = (props: IProductsView) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <div>
            <Typography variant="h4" component="h2" sx={{ margin: 10, justifyContent: "center", display: "flex" }}>
                Latest Products
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={3} md={2} >
                    <List sx={{ maxWidth: 300 }} component="nav">
                        {categories.map((category) => (
                            <ListItem
                                button
                                selected={selectedCategory === category}
                                onClick={() => handleCategoryClick(category)}
                                key={category}
                            >
                                <ListItemText primary={category} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} sm={9} md={10}>
                    <Grid container spacing={4}>
                        {products.map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <ProductCard product={product} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductsView