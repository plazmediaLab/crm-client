import React from "react";
// Components
import AssignCustomer from "../components/orders/assignCustomer";
// Context Orders
// import OrderContex from '../contex/orders/OrderContext';
import AssignProducts from "../components/orders/assignProducts";
import SummaryProducts from "../components/orders/summary-products";

const OrdersPage = () =>{

  // Utilizar context
  // const orderContex = useContext(OrderContex);
  // const {  } = orderContex;

  return(
    <div className="flex">

      <div className="w-9/12 pr-5">
        <div className="flex items-center justify-between">
          <h2 className="titlePage">Create new order</h2>
        </div>

        <hr className="border-gray-300 w-full my-6"/>

        <AssignProducts />

        <SummaryProducts/>
      </div>
      
      <div className="w-3/12">
        <AssignCustomer />
      </div>
      
    </div>
  )
} 

export default OrdersPage