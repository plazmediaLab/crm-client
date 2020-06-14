// export { wrapRootElement } from './src/config/wrap-root-element';
// export { wrapRootElement } from "./gatsby-browser"
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './src/config/apollo';
// Context (State)
import OrderState from './src/contex/orders/OrderState';

export const wrapRootElement = ({ element }) => {
  
  return (
    <ApolloProvider client={client}>
      <OrderState>

        { element }
        
      </OrderState>
    </ApolloProvider>
  )
};