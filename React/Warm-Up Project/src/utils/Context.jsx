import React, { createContext, useEffect, useState } from 'react';
import axios from './axios';

export const ProductContext = createContext();

const Context = (props) => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const { data } = await axios('/products');
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error.message);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default Context;
