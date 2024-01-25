import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, useTheme} from '@mui/material';
import {FeaturedProductsDto} from "../../../../pages/Main/Products/Dto/featuredProducts.dto";
import CustomButton from "../../Buttons";
import {useBasket} from "../../../../context/shoppingCartContext";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../../consts/routers";

interface IProductCard {
    product: FeaturedProductsDto
}

const ProductCard = (props: IProductCard) => {
    const navigate = useNavigate()
    const { basketItems, setBasketItems } = useBasket();
    const theme = useTheme()
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
                        imageUrl: props.product.imageUrl,
                        price: props.product.price,
                        quantity: 1
                    },
                    ...prevItems
                ];
        });
    };
    console.log(basketItems)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActions
                sx={{
                    padding: 0,
                    cursor: 'pointer', // This makes the cursor appear as a pointer when hovering over the CardActions area
                    '&:hover': {
                        opacity: 0.7, // This adds a hover effect to make it visually clear that the item is clickable
                    }
                }}
                onClick={() => navigate(`${ROUTES.MAIN.PRODUCT_DETAIL}/${props.product.id}`)}
            >
                <CardMedia
                component="img"
                height="300"
                image={props.product.imageUrl}
                alt={props.product.name}
                />
            </CardActions>
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