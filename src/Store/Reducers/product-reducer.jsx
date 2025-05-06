import { ADD_PRODUCT , GET_PRODUCT } from "../Actions/product-actions";

export const ProdReducer = (state = [{id:1 , title : 'prod'}] , action) => {
    switch(action.type) {
     case  ADD_PRODUCT :
        return [...state , action.payload]
     case  GET_PRODUCT :
        return [...action.payload]
     default :
        return state;
    }
}