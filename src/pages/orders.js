import React from "react";

import Layout from "../components/layout";

const OrdersPage = () => (
  <Layout>

    <div className="flex">

      <div className="w-9/12 pr-5">
        <div className="flex items-center justify-between">
          <h2 className="titlePage">Orders</h2>
        </div>
      </div>
      
      <div className="w-3/12">
        <p>Side Section</p>
      </div>
      
    </div>  

  </Layout>
)

export default OrdersPage