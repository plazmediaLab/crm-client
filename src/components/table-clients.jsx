import React from 'react';
import { useNavigate } from '@reach/router'
// Apollo Client 
import { useQuery, gql } from '@apollo/client';

const GET_SELLER_CLIENTS = gql`
  query getSellerClients{
    getSellerClients{
      id
      name
      lastname
      company
      email
    }
  }
`;

export default function TableClients(){

  const push = useNavigate();

  // Consulta a Apollo
  const { data, loading, error } = useQuery(GET_SELLER_CLIENTS);

  // Proteger el no acceder a DATA antes de que obtenga resultados
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  // console.log(data);

  // Si no hay información de un usuario autenticado
  if(!data.getSellerClients){
    push('/login');
  }

  return (
    <>
      <h2 className="titlePage">Clients</h2>
      {/* <p className="text-sm text-gray-600">Your client list: ( <span className="font-semibold">{ data.getSellerClients.length }</span> )</p> */}
      
      <table className="table-auto w-full">
        <thead>
          <tr className="text-carbon-500 font-medium text-xs">
            <th className="w-1/5 px-4 py-3 border-gray-400">Name</th>
            <th className="w-1/5 px-4 py-3 border-gray-400">Company</th>
            <th className="w-1/5 px-4 py-3 border-gray-400">Email</th>
          </tr>
        </thead>
        <tbody className="text-sm bg-white shadow-md text-center">
          { data.getSellerClients.map(client => (
            
            <tr key={client.id}>
              <td className="border px-4 py-3 border border-gray-400 text-left">{ `${client.name} ${client.lastname}`  }</td>
              <td className="border px-4 py-3 border border-gray-400">{ client.company }</td>
              <td className="border px-4 py-3 border border-gray-400">{ client.email }</td>
            </tr>

          )) }
        </tbody>
      </table>
    </>
  );
};