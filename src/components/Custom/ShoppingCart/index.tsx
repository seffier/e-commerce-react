import React, { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import {Box} from "@mui/material";

const Basket = () => {
    const [isBasketOpen, setBasketOpen] = useState(false); // State to track if basket is open

    // Function to handle basket icon click
    const toggleBasketList = () => {
        setBasketOpen(!isBasketOpen);
    };

    // ShoppingCart items (You will replace this with actual basket data)
    const basketItems = [1, 2];

    return (
        <>
            <IconButton onClick={toggleBasketList}>
                <Badge badgeContent={basketItems.length} color="primary">
                    <AddShoppingCartIcon />
                </Badge>
            </IconButton>

            <Drawer anchor='right' open={isBasketOpen} onClose={toggleBasketList} sx={{
                '& .MuiDrawer-paper': {
                    width: '20vw',
                },
            }}>
                <Box
                    sx={{
                        width: '50vw',
                    }}
                >
                    <div>
                        {basketItems.length > 0 ? (
                            basketItems.map((item, index) => (
                                <div key={index}>Item {index}</div>
                            ))
                        ) : (
                            <p>Your basket is empty.</p>
                        )}
                    </div>
                </Box>
            </Drawer>
        </>
    );
};

export default Basket;