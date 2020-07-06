import React from "react";
// Reach Router
import { Link } from 'gatsby';

const OrdersPage = () =>{

  return(
    <div className="flex">

      <div className="w-9/12 pr-5">
        <div className="flex items-center justify-between">
          <h2 className="titlePage">Order list</h2>
        </div>

        <hr className="border-gray-300 w-full my-6"/>

        <h1>Section 1</h1>

      </div>
      
      <div className="w-3/12">
        <Link 
          to="/new-order"
          className="button-success"
        >New Order</Link>
      </div>
      
    </div>
  )
} 

export default OrdersPage