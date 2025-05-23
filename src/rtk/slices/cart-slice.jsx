import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cartSlice',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState : [],
  reducers: {
    addToCart : (state, action) => {
        const findProduct = state.find((product)=> product.id === action.payload.id);
       if(findProduct){
          findProduct.quantity+=1
       }
        else {
            const prodClone = {...action.payload , quantity :1};
            state.push(prodClone)}
    },
    deleteFromCart : (state, action) => {
         return state.filter((product)=> product.id !== action.payload.id);
    },
    clear : (state, action) => {
        return [];
    },
  },
});

export const {addToCart , deleteFromCart , clear} = cartSlice.actions;

export default cartSlice.reducer;