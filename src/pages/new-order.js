import React, { useContext } from "react";
// Components
import AssignCustomer from "../components/orders/assignCustomer";
import AssignProducts from "../components/orders/assignProducts";
import SummaryProducts from "../components/orders/summary-products";
import OrderSend from "../components/orders/order-send";
// Context 
import OrderContext from '../contex/orders/OrderContext';
import Error from "../components/messages/error";
// Reach Router
import { navigate } from 'gatsby';

const Neworder = () =>{

  // Context 
  const orderContext = useContext(OrderContext);
  const { validateError } = orderContext;

  const cancelOrder = () => {
    navigate("/orders");
  };

  return(
    <div className="flex">

      <div className="w-9/12 pr-5">
        <div className="flex items-center">
          <button 
            title="Cancel the creation of a new order"
            type="button"
            className="p-2 border border-red-600 text-red-600 rounded-full flex items-center mr-3 hover:text-white hover:bg-red-500 cursor-pointer"
            onClick={cancelOrder}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
          <h2 className="titlePage">| Create new order</h2>
        </div>

        <hr className="border-gray-300 w-full my-6"/>

        <AssignProducts />

        <SummaryProducts/>

        <OrderSend />
      </div>
      
      <div className="w-3/12">
        <AssignCustomer />

        { validateError ? (
          <Error 
            message={validateError}
            // message="New Message"
            mt="mt-4"
            bg='bg-red-600'
            txt='text-white'
            p='p-4'
            br='rounded'
          />
        ) : null }

      </div>
      
    </div>
  )
} 

export default Neworder