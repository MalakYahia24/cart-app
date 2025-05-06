import { configureStore } from '@reduxjs/toolkit'
import  productesSlice  from './slices/product-slice'
import Cart from '../components/cart'
import  cartSlice  from './slices/cart-slice'
// ...

export const store = configureStore({
  reducer: {
    products : productesSlice ,
    cart : cartSlice
  },
})