import React, { useReducer } from 'react';
import OrderContext from './OrderContext';
import OrderReducer from './OrderReducer';

import {
  SELECT_CLIENT,
  SELECT_PRODUCTS,
  TOTAL_PRICE
} from '../types';

const OrderState = ({ children }) => {

  // State de pedidos
  const initialState = {
    client: {},
    products: [],
    total: 0
  };

  const [ state, dispatch ] = useReducer(OrderReducer, initialState);

  // Modificar el Cliente
  const addClient = client => {
    dispatch({
      type: SELECT_CLIENT,
      payload: client
    })
  };
  // Modificar Productos
  const addProducts = products => {
    dispatch({
      type: SELECT_PRODUCTS,
      payload: products
    })
  };

  return (
    <OrderContext.Provider
      value={{
        addClient,
        addProducts
      }}
    >

      { children }
      
    </OrderContext.Provider>
  );
};

export default OrderState;