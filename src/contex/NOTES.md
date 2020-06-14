## Configuración de Context básica

Comenzaremos creando una carpeta dentro del fichero raiz de nuestro proyecto.

~~~
contex/
~~~

Crear archivo `types.js` en el que tendremos nuestros types para los cases a validar.

~~~
// types.js

export const SELECT_CLIENT = 'SELECT_CLIENT';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const SELECT_PRODUCTS = 'SELECT_PRODUCTS';
~~~

Creamos nuestro archivo de context, en el que se creara la instancia de `createContext`

~~~
// OrderContext.js

import { createContext } from 'react';

const OrderContext = createContext();

export default OrderContext;
~~~

> Tanto nuestros archivos **Context** como el **Reducer** siempre estaran muy relacionados.

En nuestro archivo del **Reducer** tendremos nuestro `swich` para validar cada case que modificara nuestro **State**

~~~
// OrderReducer.js

import {
  SELECT_CLIENT,
  SELECT_PRODUCT,
  SELECT_PRODUCTS
} from '../types';

export default ( state, action ) => {
  switch (action.type) {
    // Cases a evaluar
      
  
    default:
      return state;
  }
};
~~~

Continuamos creando nuestro archivo que contendra nuestro **State**

En el qie importaremos nuestro **context** y los **types** a utilizar.


~~~
// OrderState.js

import React, { useReducer } from 'react';
import OrderContext from './OrderContext';
import OrderReducer from './OrderReducer';

import {
  SELECT_CLIENT,
  SELECT_PRODUCT,
  SELECT_PRODUCTS
} from '../types';

const OrderState = ({ children }) => {

  // State inicial de pedidos
  const initialState = {
    client: [],
    products: [],
    total: 0
  };

  const HolaMundo = () => {
    console.log('Hola Mundo');
  };

  const [ state, dispatch ] = useReducer(OrderReducer, initialState);

  return (
    <OrderContext.Provider
      value={{
        HolaMundo
      }}
    >

      { children }
      
    </OrderContext.Provider>
  );
};

export default OrderState;

~~~

En este caso cons **Gatsby** imporementaremos nuestro **Provider** para dispersarlo por toda la aplicación en el archivo `gatsby-ssr.js`, esto principalmente por que en esta ocación ahí tenemos nuestro `wrapRootElement` principal en donde inicia nuestra app.

Siguiendo esta directiva, en un proyecto (tal vez sin Apollo Client) podemos realizar esto tambien en el archivo `gatsby-browser.js` para dicipar nuestro context por toda la aplicación.

~~~
// gatsby-ssr.js

// export { wrapRootElement } from './src/config/wrap-root-element';
// export { wrapRootElement } from "./gatsby-browser"
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './src/config/apollo';
// Context (State)
import OrderState from './src/contex/orders/OrderState'; // <- Nuestro Context

export const wrapRootElement = ({ element }) => {
  
  return (
    <ApolloProvider client={client}>
      <OrderState> // <- Nuestro Context

        { element }
        
      </OrderState>
    </ApolloProvider>
  )
};
~~~

## Acceder a nuestro Context

Importamos el **Hook** `useContext` y nuestro **Context** en el componente, página o archivo a renderizar en el que lo necesitemos

~~~
import React, { useContext } from "react";
// Context Orders
import OrderContex from '../contex/orders/OrderContext';
~~~

Finalmente accedemos a nuestro **Context** con el **Hook** `useContext`

~~~
// Utilizar context
const orderContex = useContext(OrderContex);
const { HolaMundo } = orderContex;

HolaMundo();
~~~