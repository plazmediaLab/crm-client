import {
  SELECT_CLIENT,
  SELECT_PRODUCT,
  SELECT_PRODUCTS
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
      
  
    default:
      return state;
  }
};