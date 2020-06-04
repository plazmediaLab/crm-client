import React from 'react';
// Apollo Client
import { useQuery, gql } from '@apollo/client';
// Reach Router
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

  // Reach Router
  const push = useNavigate();

  // Query a Usuario
  const { data, loading, error } = useQuery(GET_USER);

  // Proteger el no acceder a DATA antes de que obtenga resultados
  if(loading) return null;

  //
  const logUt = () => {
    // Eliminar Token del Local Storage
    localStorage.removeItem('pm-token');
    // Redireccionar al Login 
    push('/login');
  }; 

  return (
    <div className="flex justify-between p-4 shadow-sm border-b border-gray-400">
      <p className="font-semibold text-carbon-300">Welcome: <span className="font-light">&nbsp; { `${data.getUser.name} ${data.getUser.lastname}` } </span></p>
      <button 
        type="button"
        className="border border-red-600 rounded text-xs px-2 text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-100 ease-in-out"  
        onClick={ logUt }
      >
        Log Out
      </button>
    </ div>
  );
};