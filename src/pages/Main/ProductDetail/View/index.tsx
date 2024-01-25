import React, { useState } from 'react';
import { IProductDetailView } from "../ViewModel";
import {Button, Card, CardMedia, Grid, Typography, useTheme} from "@mui/material";
import CustomButton from "../../../../components/Custom/Buttons";
import {useBasket} from "../../../../context/shoppingCartContext";

const ProductDetailView = (props: IProductDetailView) => {
    const { basketItems, setBasketItems } = useBasket();
    const [mainImage, setMainImage] = useState(props.product.imageUrl[0]);
    const theme = useTheme()
    // Function to change the main image
    const handleImageClick = (imageUrl: string) => {
        setMainImage(imageUrl);
    };

    const addToBasket = () => {
        setBasketItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === props.product.id);
            return existingItem
                ? prevItems.map(item =>
                    item.id === props.product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
                : [
                    {
                        id: props.product.id,
                        name: props.product.name,
                        imageUrl: props.product.imageUrl[0],
                        price: props.product.price,
                        quantity: 1
                    },
                    ...prevItems
                ];
        });
    };

    console.log(basketItems)
    return (
        <Grid container spacing={2} marginLeft={10} justifyContent="center">
            <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        component="img"
                        height="500"
                        image={mainImage}
                        alt={props.product.name}
                        sx={{
                            padding: '20px',
                            background: '#fff',
                            boxSizing: 'border-box',
                        }}
                    />
                    <Grid container justifyContent="center" spacing={2} sx={{ marginTop: 1 }}>
                        {props.product.imageUrl.map((imageUrl, index) => (
                            <Grid item key={index}>
                                <Button onClick={() => handleImageClick(imageUrl)} sx={{ padding: 1, marginBottom: 2 }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 70, height: 90, border: mainImage === imageUrl ? '2px solid #3f51b5' : '' }}
                                        image={imageUrl}
                                        alt={props.product.name}
                                    />
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12} md={8} sx={{ alignSelf: 'flex-start', marginTop: 10 }}>
                <Typography variant="h1" component="h1" sx={{ marginBottom: 10 }}>
                    {props.product.name}
                </Typography>
                <Typography variant="body1">
                    {props.product.description}
                </Typography>
                <CustomButton.GeneralButton
                    xs={2}
                    style={{backgroundColor: theme.palette.common.white, marginTop: 20 }}
                    buttonProps={{
                        type: 'submit',
                        onClick: addToBasket
                    }}
                >
                    Add to Cart
                </CustomButton.GeneralButton>
            </Grid>
        </Grid>
    );
};

export default ProductDetailView;