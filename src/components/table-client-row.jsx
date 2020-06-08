import React from 'react';
// Apollo Client
import { useMutation, gql } from '@apollo/client';
// Sweet Alert
import Swal from 'sweetalert2';

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!){
    deleteClient(id: $id)
  }
`;

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

export default function TableClientRow({ client, index }){

  const { id } = client;

  // Mutation para eliminar cliente
  const [ deleteClient ] = useMutation(DELETE_CLIENT, {
    update(cache){
      // Obtener una copia del objeto de cache
      const { getSellerClients } = cache.readQuery({ query: GET_SELLER_CLIENTS });

      // Re-escribir el cache
      cache.writeQuery({
        query: GET_SELLER_CLIENTS,
        data: {
          getSellerClients: getSellerClients.filter( actualClient => actualClient.id !== id )
        }
      })
    }
  });

  const DeletClient = (ID) => {
    console.log(ID);

    Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be reversed!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then( async (result) => {
      if (result.value) {

        try {
          await deleteClient({
            variables: {
              id
            }
          })
        
        } catch (error) {
          console.log(error);
        }

        Swal.fire(
          'Deleted!',
          'Your client has been deleted.',
          'success'
        )
      }
    })

  };
  const EditClient = (ID) => {
    console.log(ID);
  };

  return (
    <>              
        <tr key={client.id}>
          <td className="border px-3 py-3 border border-gray-400 font-semibold">{ index + 1 }</td>
          <td className="border px-3 py-3 border border-gray-400 text-left">{ `${client.name} ${client.lastname}`  }</td>
          <td className="border px-3 py-3 border border-gray-400">{ client.company }</td>
          <td className="border px-3 py-3 border border-gray-400">{ client.email }</td>
          <td className="border px-3 py-3 border border-gray-400">
            <button 
              type="button"
              title='Edit client'
              className="text-xs py-2 px-3 rounded text-p_blue-500 hover:bg-gray-300"
              onClick={() => EditClient(id)}
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
            </button>
            <button 
              type="button"
              title='Delete client'
              className="text-xs py-2 px-3 rounded text-red-600 hover:bg-gray-300"
              onClick={() => DeletClient(id)}
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </td>
        </tr>
    </>
  );
};