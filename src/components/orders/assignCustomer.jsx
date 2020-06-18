import React, { useContext } from 'react';
// react Select 
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useQuery, gql } from '@apollo/client';
// Context
import OrderContext from '../../contex/orders/OrderContext';

const GET_SELLER_CLIENTS = gql`
  query getSellerClients{
    getSellerClients{
      id
      name
      lastname
    }
  }
`;

// Options rect select
// const clients = [
//   { id: 1, name: 'Adrian' },
//   { id: 2, name: 'Evan' },
//   { id: 3, name: 'Alain' },
//   { id: 4, name: 'Mireya' },
//   { id: 5, name: 'Beth' },
// ];

// Animación para elementos seleccionados
const animatedComponents = makeAnimated();

export default function AssignCustomer(){

  // Local State
  // const [client, setClient] = useState([]);

  // Query para optener clientes del vendedor
  const { data, loading, error } = useQuery(GET_SELLER_CLIENTS);

  // Context
  const orderContext = useContext(OrderContext);
  const { addClient } = orderContext;

  // useEffect(() => {
  //   console.log(client);
  // }, [client]);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error...</p>

  // Función onChange para agregar las selecciones al Local State
  const selectClients = client_arg => {
    // setClient(client_arg)
    addClient(client_arg)
  };

  const { getSellerClients } = data;

  return (
    <>
    
      <p className="text-p_blue-500 text-sm flex items-center my-2">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd"></path></svg>
        Add the client or clients for the order
      </p>
      <Select 
        options={getSellerClients} 
        // isMulti
        components={animatedComponents}
        onChange={ client => selectClients(client)}
        // obtener [value] renombrado id del array de opciones
        getOptionValue={client => client.id}
        // obtener [label] renombrado name del array de opciones
        getOptionLabel={client => `${client.name} ${client.lastname}` }
        // placeholder del input 
        placeholder='Search or Select the client'
        // mensaje al no encontrar elementos buscados 
        noOptionsMessage={() => 'No results'}
      />

    </>
  );
};