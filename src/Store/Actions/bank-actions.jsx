export const WIDTHRAW_MONEY = " WIDTHRAW_MONEY";
export const DEPOSIT_MONEY = " DEPOSIT_MONEY";

export const widthraw = (amount) => {
    return { 
             type : WIDTHRAW_MONEY,
             payload : amount 
     }
 }
 
 export const deposit = (amount) => {
     return { 
              type : DEPOSIT_MONEY,
              payload : amount 
      }
  }