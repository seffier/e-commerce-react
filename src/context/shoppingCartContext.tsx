import React, { createContext, useState, useContext, ReactNode } from 'react';
import {FeaturedProductsDto} from "../pages/Main/Products/Dto/featuredProducts.dto";

interface BasketContextType {
    basketItems: FeaturedProductsDto[]; // Update this `any` type to match the type of your basket items
    setBasketItems: React.Dispatch<React.SetStateAction<any[]>>; // Same here for `any`
}

const defaultContextValue: BasketContextType = {
    basketItems: [],
    setBasketItems: () => {}
};

export const BasketContext = createContext<BasketContextType>(defaultContextValue);

export const useBasket = () => useContext(BasketContext);

interface BasketProviderProps {
    children: ReactNode;
}

export const BasketProvider: React.FC<BasketProviderProps> = ({ children }) => {
    const [basketItems, setBasketItems] = useState<any[]>([]); // Update the generic type here as well

    return (
        <BasketContext.Provider value={{ basketItems, setBasketItems }}>
            {children}
        </BasketContext.Provider>
    );
};