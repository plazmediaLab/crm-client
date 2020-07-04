import React, { useState, useEffect, useContext } from 'react';
// Context
import OrderContext from '../../contex/orders/OrderContext';
// Apollo
import { useMutation, gql } from '@apollo/client';

const NEW_ORDER = gql`
  mutation newOrder($input: OrderInput){
    newOrder(input: $input){
      id
    }
  }
`;

function OrderSend(){

  // State Local
  const [active, setActive] = useState(true);

  // Context
  const orderContext = useContext(OrderContext);
  const { client, products, total, errorMessage } = orderContext;

  // Mutation para nueva pedido
  const [ newOrder ] = useMutation(NEW_ORDER);

  useEffect(() => {    
    if(Object.keys(client).length > 0 && products.length > 0){
      setActive(false);
    }else{
      setActive(true);
    }
  }, [client, products]);

  // Funsión para el Mutation
  const orderSend = async e => {
    if(active){
      e.preventDefault();
      return null 
    }
    
    // Destructuring
    const { id } = client;

    // Remover lo no deseado de productos
    const order = products.map( ({ exist, __typename, ...item }) => item );

    try {

      await newOrder({
        variables:{
          input:{
           order,
           total,
           client: id
          }
        }
      });

    } catch (error) {
      errorMessage(error.message)
    }
  };

  return (
    <button
      type="button"
      className={ `py-3 w-full my-4 flex items-center justify-center ${ active ? "primary-button-disabled" : "primary-button" }` }
      onClick={(e) => orderSend(e)}
    >
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
      Save Order
    </button>
  );
};

export default React.memo(OrderSend);