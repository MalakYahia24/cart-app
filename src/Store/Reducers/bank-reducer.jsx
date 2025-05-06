import { WIDTHRAW_MONEY , DEPOSIT_MONEY } from "../Actions/bank-actions";
export default function BankReducer  (state = 1000 , action)  {
    switch(action.type) {
     case  WIDTHRAW_MONEY :
        return state - action.payload
     case  DEPOSIT_MONEY :
        return state + action.payload
     default :
        return state;
    }
}