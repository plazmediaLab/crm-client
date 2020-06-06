import React from "react";
// Components
import Layout from "../components/layout";
// Components
import TableClients from '../components/table-clients';
import NewClientForm from "../components/new-client-form";

const IndexPage = () => {

  return (
    <Layout>
      
        <div className="flex">
          <div className="w-9/12 pr-5">
            <TableClients />
          </div>
          
          <div className="w-3/12">
            <NewClientForm />
          </div>
        </div>

    </Layout>
  )
}

export default IndexPage
