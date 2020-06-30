import {
  SELECT_CLIENT,
  SELECT_PRODUCTS,
  PRODUCTS_QUANTITY,
  UPDATE_TOTAL,
  RESET_STATE,
  ERROR_MESSAGE
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
    case PRODUCTS_QUANTITY:
      return{
        ...state,
        products: state.products.map( product => product.id === action.payload.id ? action.payload : product)
      }
    case UPDATE_TOTAL:
      return{
        ...state,
        total: state.products.reduce((acc, el) => acc + (el.price * el.quantity), 0)
      }
    case RESET_STATE: 
      return{
        client: {},
        products: [],
        total: 0
      }
    case ERROR_MESSAGE:
      return{
        ...state,
        validateError: action.payload
      }
      
  
    default:
      return state;
  }
};