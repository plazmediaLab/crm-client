import React from 'react';
// Apollo Client 
import { useQuery, gql } from '@apollo/client';
import TableClientRow from './table-client-row';
// import { object } from 'prop-types';

// import * as moment from 'moment';

const GET_SELLER_CLIENTS = gql`
  query getSellerClients{
    getSellerClients{
      id
      name
      lastname
      company
      email
      phone
      
    }
  }
`;

export default function TableClients({ navigate }){

  // Consulta a Apollo
  const { data, loading } = useQuery(GET_SELLER_CLIENTS);

  // Proteger el no acceder a DATA antes de que obtenga resultados
  // if(loading) return <p>Loading...</p>;
  // if(error) return <p>Error {error.message}</p>;

  // console.log(data);

  // Si no hay información de un usuario autenticado
  // if(!data && !getSellerClients){
  //   navigate('/login');
  //   return null
  // }

  return (
    <>
      { loading ? (
        'Loading...'
      ) : (
        <>
          <div className="flex items-center justify-between">
            <h2 className="titlePage">Clients</h2>
            <p className="text-sm text-gray-600">Your client list: ( <span className="font-semibold">{ data.getSellerClients.length }</span> )</p>      
          </div>
          
          <table className="table-auto w-full mt-6">
            <thead>
              <tr className="text-carbon-500 font-medium text-xs">
                <th className="w-1/12 px-4 py-3 border-gray-400">#</th>
                <th className="px-4 py-3 border-gray-400">Name</th>
                <th className="px-4 py-3 border-gray-400">Company</th>
                <th className="px-4 py-3 border-gray-400">Email</th>
                <th className="w-2/12 px-4 py-3 border-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm bg-white shadow-md text-center">
              { data.getSellerClients.map((client, index) => (
                <TableClientRow 
                  key={ client.id }
                  client={ client }
                  index={ index }
                />
              )) }
            </tbody>
          </table>
        </>
      ) }
    </>
  );
};