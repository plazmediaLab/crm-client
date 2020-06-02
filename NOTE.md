# Configurar Gatsby + Apollo Client 

Lo primero que tenemos  que hacer es intalar las dependencias necesarias para configurar Apollo client.

### Instalaciones necesarias

~~~
// Root project

 $ npm i @apollo/client isomorphic-fetch
~~~

### Apollo Client y Provider

Una ves instaladas las dependencias, tenemos que crear y configurar el cliente de Apollo.

creamos el archivo `apollo.js` en la ubicación `src/config` y agregamos las configuraciones necesarias.

~~~
// apollo.js

import { 
  ApolloClient, 
  HttpLink, 
  InMemoryCache 
} from '@apollo/client';
import fetch from 'isomorphic-fetch';

// La URL en la que esta corriendo nuestro servidor de Apollo
const urlServer = 'http://localhost:4000/'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: urlServer,
    fetch
  })
})

export default client
~~~

A hora continuamos agregando Apollo Provider a nuestro proyecto, esto para que nuestra app este bajo el servicio de apollo para nuestras consultas.

En la misma ubicación `src/config` creamos el archivo `wrap-root-element.js` y agregamos la diguiente configuración.

~~~
// wrap-root-element.js

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';

export const wrapRootElement = ({ element }) => (
  // Agregamos nuestro cliente de Apollo al provider
  <ApolloProvider client={client}>
  
    { element }

  </ApolloProvider>
);
~~~

Este archivo y configuracion es para ser ejecutado nuestro cliente de Apollo en nuestra app, y a su ves mantener envueltos todos nuestros componentes bajo el Provider y así tener acceso a GraphQL.

### Gatsby Browser y Ssr

En nuestro archivo `batsby-browser.js` agregamos la exportación del Provider.

~~~
// batsby-browser.js

export { wrapRootElement } from './src/config/wrap-root-element';
~~~

Igualmente en el archivo `batsby-ssr.js`.

~~~
// batsby-ssr.js

export { wrapRootElement } from './src/config/wrap-root-element';
~~~

> El archivo `batsby-browser.js` archivo se ejecuta al renderisar nuestra aplicación de Gatsby en el desarrollo, a diferencia del archivo `batsby-ssr.js` que se renderisa al inicio de la aplicación pero en produccion, de ahí la razón que lo tenemos que exportar desde ambos archivos.

Esta sería toda la configuración base que necesitamos para conectar nuestro Cliente de Apollo con el Servidos.

A hora para hacer las consultas (query, mutation, etc), realizamos los siguientes pasos.

### Mi primer Query

Primero tenemos que importar tanto `useQuery` y `gpl` para poder acceder a estas funciones.

~~~
// En nuestro componente para generar el query

// Apollo GraphQL
import { useQuery, gql } from '@apollo/client';
~~~

A hora declaramos nuestro query.

~~~
const QUERY = gql`
  query getProducts{
    getProducts{
      id
      name
      exist
      price
      created
    }
  }
`;
~~~

Para finalmente realizar la condulta dentro de nuestro componente retornado.

~~~
const { data, loading, error  } = useQuery(QUERY);
console.log(data);
~~~

> + "data" -> Datos retornados de nuestra consulta
> + "loading" -> Estado de la condulta, 'true' mientras se esta realizandoo y false cuando ya resolvio
> + "error" -> Devuelve los errores de la consulta, en caso haya.