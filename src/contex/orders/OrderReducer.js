import {
  SELECT_CLIENT,
  SELECT_PRODUCTS,
  TOTAL_PRICE,
  RESET_STATE
} from '../types';

export default ( state, action ) => {
  switch (action.type) {
    case SELECT_CLIENT:
      return{
        ...state,
        client: action.payload
      }
    case SELECT_PRODUCTS:
      return{
        ...state,
        products: action.payload
      }
    case RESET_STATE: 
      return{
        client: {},
        products: [],
        total: 0
      }
      
  
    default:
      return state;
  }
};