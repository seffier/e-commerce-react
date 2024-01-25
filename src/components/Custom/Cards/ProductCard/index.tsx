import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, useTheme} from '@mui/material';
import {FeaturedProductsDto} from "../../../../pages/Main/Products/Dto/featuredProducts.dto";
import CustomButton from "../../Buttons";
import {useBasket} from "../../../../context/shoppingCartContext";

interface IProductCard {
    product: FeaturedProductsDto
}

const ProductCard = (props: IProductCard) => {
    const { basketItems, setBasketItems } = useBasket();
    const theme = useTheme()
    const addToBasket = () => {
        setBasketItems(prevItems => [
            // Add the new item on top of the previous items
            {
                id: props.product.id,
                name: props.product.name,
                imageUrl: props.product.imageUrl, // If imageUrl is specific per product, use props.product.imageUrl instead of test1
                price: props.product.price,
                quantity: 1
            },
            ...prevItems
        ]);
    };
    console.log(basketItems)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="300"
                image={props.product.imageUrl}
                alt={props.product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.product.description}
                </Typography>
                <Typography variant="h6" color="text.primary">
                    ${props.product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <CustomButton.GeneralButton
                    xs={6}
                    style={{backgroundColor: theme.palette.common.white }}
                    buttonProps={{
                        type: 'submit',
                        onClick: addToBasket
                    }}
                >
                    Add to Cart
                </CustomButton.GeneralButton>
            </CardActions>
        </Card>
    );
};

export default ProductCard;