import React, { useReducer } from 'react';
import OrderContext from './OrderContext';
import OrderReducer from './OrderReducer';

import {
  SELECT_CLIENT,
  SELECT_PRODUCTS,
  PRODUCTS_QUANTITY,
  TOTAL_PRICE,
  RESET_STATE
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

    let newState;
    if(state.products.length > 0){
      // Tomar una copia del segundo arreglo para agregarlo al primero
      newState = products.map(product => {
        const newObject = state.products.find( productState => productState.id === product.id );
        return { ...product, ...newObject }
      })
    }else{
      newState = products
    }

    dispatch({
      type: SELECT_PRODUCTS,
      payload: newState
    })
  };
  // Cantidad de los productos
  const productsQuantity = newProduct => {
    dispatch({
      type: PRODUCTS_QUANTITY,
      payload: newProduct
    })
  };
  // reset initialState
  const resetState = () => {
    dispatch({
      type: RESET_STATE,
    })
  }; 

  return (
    <OrderContext.Provider
      value={{
        products: state.products,
        total: state.total,
        addClient,
        addProducts,
        productsQuantity,
        resetState
      }}
    >

      { children }
      
    </OrderContext.Provider>
  );
};

export default OrderState;