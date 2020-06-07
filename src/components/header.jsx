import React from 'react';
// Apollo Client
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from '@reach/router';

const GET_USER = gql`
  query getUser{
    getUser{
      name
      lastname
    }
  }
`;

export default function Header(){

  const push = useNavigate();

  // Query a Usuario
  const { data, loading, error, client } = useQuery(GET_USER);

  // Proteger el no acceder a DATA antes de que obtenga resultados
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  // Si no hay información de un usuario autenticado
  if(!data.getUser){
    push('/login', { replace: true });
  }

  //
  const logUt = () => {
    // Eliminar Token del Local Storage
    
    // Redireccionar al Login 
    push('/login', { replace: true }).then(() => {
      localStorage.removeItem('pm-token');
      client.resetStore()
    });
  }; 

  return (

    <>
      <div className="flex justify-between p-4 shadow-sm border-b border-gray-400">
        <p className="text-sm font-semibold text-carbon-300">
          <svg className="w-6 h-6 mr-1 inline-block text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
          Hi: <span className="font-light">&nbsp; { `${data.getUser.name} ${data.getUser.lastname}` }
        </span></p>
        <button 
          type="button"
          className="border border-red-600 rounded text-xs px-2 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-100 ease-in-out"  
          onClick={ () => logUt() }
        >
          Log Out
        </button>
      </ div>
    </>
    
  );
};