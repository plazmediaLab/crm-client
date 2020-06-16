import React, { useContext } from 'react';
// react Select 
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useQuery, gql } from '@apollo/client';
// Context
import OrderContext from '../../contex/orders/OrderContext';

// Animación para elementos seleccionados
const animatedComponents = makeAnimated();

const GET_PRODUCTS = gql`
  query{
    getProducts{
      id
      name
      exist
      price
    }
  }
`;

export default function AssignProducts(){

  // Query para optener clientes del vendedor
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  // Context
  const orderContext = useContext(OrderContext);
  const { addProducts } = orderContext;

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error...</p>

  // Función onChange para agregar las selecciones al Local State
  const selectProducts = client_arg => {
    addProducts(client_arg)
  };

  const { getProducts } = data;

  return (
    <div className="content-step border-pink-500">
      <h3 className="text-pink-500">Assign Products</h3>

      <Select 
        className="mt-3"
        options={ getProducts } 
        isMulti
        components={animatedComponents}
        onChange={ product => selectProducts(product)}
        // obtener [value] renombrado id del array de opciones
        getOptionValue={product => product.id}
        // obtener [label] renombrado name del array de opciones
        getOptionLabel={product => `${product.name} / ${product.exist} in stock` }
        // placeholder del input 
        placeholder='Search or Select the product'
        // mensaje al no encontrar elementos buscados 
        noOptionsMessage={() => 'No results'}
      />
    </div>

  );
};