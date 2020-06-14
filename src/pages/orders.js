import React, { useContext } from "react";
import Layout from "../components/layout";
// Components
import AssignCustomer from "../components/orders/assignCustomer";
// Context Orders
import OrderContex from '../contex/orders/OrderContext';

const OrdersPage = () =>{

  // Utilizar context
  const orderContex = useContext(OrderContex);
  const {  } = orderContex;

  return(
    <Layout>
  
      <div className="flex">
  
        <div className="w-9/12 pr-5">
          <div className="flex items-center justify-between">
            <h2 className="titlePage">Orders</h2>
          </div>
          <p>Main Section</p>
        </div>
        
        <div className="w-3/12">
          <AssignCustomer />
        </div>
        
      </div>  
  
    </Layout>
  )
} 

export default OrdersPage