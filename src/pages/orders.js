import React, { useContext } from "react";
import Layout from "../components/layout";
// Components
import AssignCustomer from "../components/orders/assignCustomer";
// Context Orders
import OrderContex from '../contex/orders/OrderContext';
import AssignProducts from "../components/orders/assignProducts";

const OrdersPage = () =>{

  // Utilizar context
  const orderContex = useContext(OrderContex);
  const {  } = orderContex;

  return(
    <Layout>
  
      <div className="flex">
  
        <div className="w-9/12 pr-5">
          <div className="flex items-center justify-between">
            <h2 className="titlePage">Create new order</h2>
          </div>

          <hr className="border-gray-300 w-full my-6"/>

          <AssignProducts />
        </div>
        
        <div className="w-3/12">
          <AssignCustomer />
        </div>
        
      </div>  
  
    </Layout>
  )
} 

export default OrdersPage