import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useBasket} from "../../../context/shoppingCartContext";

interface BasketItem {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    quantity: number;
}

const Basket = () => {
    const [isBasketOpen, setBasketOpen] = useState(false); // State to track if basket is open
    const { basketItems, setBasketItems } = useBasket();

    const toggleBasketList = () => {
        setBasketOpen(!isBasketOpen);
    };

    const handleAddQuantity = (itemId: number) => {
        setBasketItems(basketItems.map((item) =>
                item.quantity ? item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item : null
        ));
    };

    const handleRemoveQuantity = (itemId: number) => {
        setBasketItems((prevItems: BasketItem[]) =>
            prevItems.reduce((result: BasketItem[], item: BasketItem) => {
                if (item.id === itemId) {
                    const newQuantity = item.quantity > 1 ? item.quantity - 1 : 0;
                    if (newQuantity > 0) {
                        result.push({ ...item, quantity: newQuantity });
                    }
                } else {
                    result.push(item);
                }
                return result;
            }, [])
        );
    };

    return (
        <>
            <IconButton onClick={toggleBasketList} >
                <Badge badgeContent={basketItems.length} color="error">
                    <AddShoppingCartIcon />
                </Badge>
            </IconButton>

            <Drawer anchor='right' open={isBasketOpen} onClose={toggleBasketList}>
                <TableContainer component={Paper} sx={{ maxWidth: 500 }}>
                    <Table aria-label="shopping cart table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell align="center">Quantity</TableCell>
                                <TableCell align="right">Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {basketItems.length > 0 ? (
                                basketItems.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <Box display="flex" alignItems="center">
                                                <img src={item.imageUrl} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                                                <Typography>{item.name}</Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell align="center">
                                            <IconButton onClick={() => handleRemoveQuantity(item.id)} size="small">
                                                <RemoveIcon fontSize="small" />
                                            </IconButton>
                                            {item.quantity}
                                            <IconButton onClick={() => handleAddQuantity(item.id)} size="small">
                                                <AddIcon fontSize="small" />
                                            </IconButton>
                                        </TableCell>
                                        <TableCell align="right">${item.quantity ? (item.price * item.quantity).toFixed(2) : null}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={3} align="center">Your basket is empty.</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Drawer>
        </>
    );
};

export default Basket;