import React from "react";
// Components
import Layout from "../components/layout";
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

const IndexPage = () => {

  // Consulta a Apollo
  const { data, loading, error } = useQuery(GET_SELLER_CLIENTS);
  // console.log(data);

  return (
    <Layout>

      { loading ? 'loading...' : (
      
        <>
          <h2 className="titlePage py-3">Clients</h2>
          
          <table class="table-auto shadow-md w-full w-lg">
            <thead className="bg-white">
              <tr className="text-carbon-500 text-left font-medium text-sm">
                <th class="w-1/5 px-4 py-3 border border-b-2 border-gray-400">Name</th>
                <th class="w-1/5 px-4 py-3 border border-b-2 border-gray-400">Company</th>
                <th class="w-1/5 px-4 py-3 border border-b-2 border-gray-400">Email</th>
              </tr>
            </thead>
            <tbody className="text-sm bg-white">
              { data.getSellerClients.map(client => (
                
                <tr key={client.id}>
                  <td class="border px-4 py-3 border border-gray-400">{ `${client.name} ${client.lastname}`  }</td>
                  <td class="border px-4 py-3 border border-gray-400">{ client.company }</td>
                  <td class="border px-4 py-3 border border-gray-400">{ client.email }</td>
                </tr>

              )) }
            </tbody>
          </table>
        </>

      )}

      
    </Layout>
  )
}

export default IndexPage
