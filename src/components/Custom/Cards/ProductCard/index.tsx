import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import {FeaturedProductsDto} from "../../../../pages/Main/Products/Dto/featuredProducts.dto";
import CustomButton from "../../Buttons";

interface IProductCard {
    product: FeaturedProductsDto
}

const ProductCard = (props: IProductCard) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="200"
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
                    buttonProps={{
                        type: 'submit'
                    }}
                >
                    Add to Cart
                </CustomButton.GeneralButton>
            </CardActions>
        </Card>
    );
};

export default ProductCard;