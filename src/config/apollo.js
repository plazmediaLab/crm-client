import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'isomorphic-fetch';
// import fetch from 'node-fetch';
import { setContext } from 'apollo-link-context';

// creamos nuestro HttpLink con la conexión a Apollo Server
const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
  fetch
});

// creamos nuestro header nuevo en el que incluiremos el Token 
const authLink = setContext((_, { headers }) => {

  // leer el token creado con el Login en el Local Storage
  const token = localStorage.getItem('pm-token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      Plazmedia_Process: 'Request send...'
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(), 
  // Agregamos nuestro HttpLink creado con nuestro header
  // Y lo concatenamos con la conexxión a Apollo
  link: authLink.concat( httpLink )
})

export default client