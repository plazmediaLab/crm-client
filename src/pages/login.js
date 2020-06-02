import React from 'react';
import { Link } from '@reach/router';

import Layout from "../components/layout";
import FormContainer from '../components/form-container';
import LogoWhite from '../components/logo-white';

export default function Login(){

  return (
    <Layout>

        <div className="grid justify-center align-middle my-3 mt-6">
          <LogoWhite />
        </div>

        <FormContainer>

          <form
            className=""
          >
            <div className="mb-4">
              <label 
                className="block text-p_blue-300 text-sm font-normal mb-2"
                htmlFor="email"  
              >
                Email
              </label>
              <input 
                id="email"
                type="text"
                placeholder="Write your email"
                className="appearance-none border border-bluegray-100 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label 
                className="block text-p_blue-300 text-sm font-normal mb-2"
                htmlFor="password"  
              >
                Password
              </label>
              <input 
                id="password"
                type="password"
                placeholder="Write your password"
                className="appearance-none border border-bluegray-100 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <input 
              type="submit"
              className="primary-button mt-5"
              value="Login"
            />

          </form>

          
          <p className="text-center text-xs mt-8 text-carbon-200">
            Do not you have an account yet?&nbsp;| &nbsp;
            <Link 
              to="sign-up"
              className="text-p_blue-500 underline"
              title="Go to Sign UP"
            >
              Sign Up
            </Link>
          </p>
          

        </FormContainer>
      
    </Layout>
  );
};