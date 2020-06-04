/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// Modular-CSS main style sheets
import './src/utils/globals.css'

// export { wrapRootElement } from './src/config/wrap-root-element';
import React from "react"
import client from "./src/config/apollo";
import { ApolloProvider } from "@apollo/client"

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    {element}
  </ApolloProvider>
)