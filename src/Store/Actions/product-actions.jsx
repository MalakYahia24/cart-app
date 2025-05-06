export const GET_PRODUCT = "GET_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";


export const getProduct = (prod) => {
    return {
      type : GET_PRODUCT,
      payload : prod
    }
}
 
export const addProduct = (prod) => {
     return { 
              type : ADD_PRODUCT,
              payload : prod 
      }
  }