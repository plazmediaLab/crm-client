import React from 'react';
// Apollo Client
import { useQuery, gql } from '@apollo/client';
import ProductsTableRow from './products-table-row';

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

export default function ProductsTable({ edit, setEdit, setProduct }){

  // Query para obtener productos
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error...</h1>

  return (
    <table className="table-auto w-full mt-6">
      <thead>
        <tr className="text-carbon-500 font-medium text-xs">
          <th className="w-1/12 px-4 py-3 border-gray-400">#</th>
          <th className="w-6/12 px-4 py-3 border-gray-400">Name</th>
          <th className="w-1/12 px-4 py-3 border-gray-400">Stock</th>
          <th className="w-2/12 px-4 py-3 border-gray-400">Unit price</th>
          <th className="w-2/12 px-4 py-3 border-gray-400">Actions</th>
        </tr>
      </thead>
      <tbody className="text-sm bg-white shadow-md text-center">
        { data.getProducts.map((product, index) => (
          <ProductsTableRow 
            key={ product.id }
            product={ product }
            index={ index }
            edit={ edit }
            setEdit={ setEdit }
            setProduct={ setProduct }
          />
        )) }
      </tbody>
    </table>
  );
};