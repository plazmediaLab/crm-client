// export { wrapRootElement } from './src/config/wrap-root-element';
// export { wrapRootElement } from "./gatsby-browser"
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './src/config/apollo';

export const wrapRootElement = ({ element }) => {
  
  return (
    <ApolloProvider client={client}>

        { element }

    </ApolloProvider>
  )
};