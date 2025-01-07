import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducer/cartSlice'
import productsReducer from './reducer/productsSlice'
import themeReducer from './reducer/themeSlice'

export const store = configureStore({
    reducer : {
        cart : cartReducer,
        products : productsReducer,
        theme : themeReducer,
        // product : productsReducer
    }
})