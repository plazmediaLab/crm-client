import React from "react";
// Components
import Layout from "../components/layout";
// Appollo Client
import { useQuery, gql } from '@apollo/client';
// Reach Router
import { useNavigate } from '@reach/router';

// const GET_CLIENT


const EditClient = (props) => {

  const push = useNavigate();

  const clientInfo = props.location.state.client;
  const { name, lastname, company, email, phone } = clientInfo;

  return (
    <Layout>
      
        <div className="flex">
          <div className="w-9/12 pr-5">
            <div className="flex items-center bg-white mt-2">
              <button 
                className="bg-red-600 text-white p-3"
                onClick={() => push(-1)}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <h3 className=" px-3 font-semibold text-sm uppercase text-carbon-300 bg-white">Edit customer: <span className="font-light">{`${name} ${lastname}`}</span></h3>
            </div>
          </div>
          
          <div className="w-3/12">
            <h1>Section 2</h1>
          </div>
        </div>

    </Layout>
  )
}

export default EditClient