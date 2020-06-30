import React, { useReducer } from 'react';
import OrderContext from './OrderContext';
import OrderReducer from './OrderReducer';

import {
  SELECT_CLIENT,
  SELECT_PRODUCTS,
  PRODUCTS_QUANTITY,
  UPDATE_TOTAL,
  RESET_STATE,
  ERROR_MESSAGE
} from '../types';

const OrderState = ({ children }) => {

  // State de pedidos
  const initialState = {
    client: {},
    products: [],
    total: 0,
    validateError: null
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
  const addProducts = selectProducts => {
    let newState;
    // Tomar una copia del segundo arreglo para agregarlo al primero
    newState = selectProducts.map(product => {
      const newObject = state.products.find( productState => productState.id === product.id );
      return { ...product, ...newObject }
    })
          
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
  // Update Total
  const updateTotal = () => {
    dispatch({
      type: UPDATE_TOTAL
    });
  };
  // reset initialState
  const resetState = () => {
    dispatch({
      type: RESET_STATE,
    })
  }; 
  // Validar por error al crear un nuevo pedido
  const errorMessage = content => {
    dispatch({
      type: ERROR_MESSAGE,
      payload: content
    })
  }

  return (
    <OrderContext.Provider
      value={{
        client: state.client,
        products: state.products,
        total: state.total,
        validateError: state.validateError,
        addClient,
        addProducts,
        productsQuantity,
        updateTotal,
        resetState,
        errorMessage
      }}
    >

      { children }
      
    </OrderContext.Provider>
  );
};

export default OrderState;