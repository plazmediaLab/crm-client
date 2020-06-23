import React, { useContext, useState, useEffect } from 'react';
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

  // State Local
  // const [productList, setProductList] = useState([]);

  // Query para optener clientes del vendedor
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  // Context
  const orderContext = useContext(OrderContext);
  const { addProducts } = orderContext;


  // useEffect(() => {
    // if(!productList){
    //   setProductList([]);
    // }else{
    //   addProducts(productList);
    // }
  // }, [productList]);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error...</p>

  // Función onChange para agregar las selecciones al Local State
  const selectProducts = product_arg => {
    // Agregar los productos al State Global
    if(product_arg === null){
      product_arg = []
    }
    addProducts(product_arg);
  };

  const { getProducts } = data;

  return (
    <div className="content-step border-pink-500">
      <h3 className="text-pink-500">Assign Products</h3>
      <p className="text-bluegray-200 text-sm">Select the product or products that are delivered to the customer in their order.</p>

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