import React from 'react';
import { Link } from '@reach/router';

import Layout from '../components/layout';
import FormContainer from '../components/form-container';
import LogoWhite from '../components/logo-white';

export default function SignUp(){
  return (
    <Layout>

        <div className="grid justify-center align-middle mb-3">
          <LogoWhite />
        </div>

        <FormContainer>

          <form
            className=""
          >
            <div className="mb-4">
              <label 
                className="block text-p_blue-300 text-sm font-normal mb-2"
                htmlFor="name"  
              >
                Name
              </label>
              <input 
                id="name"
                type="text"
                placeholder="Write your email"
                className="appearance-none border border-bluegray-100 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label 
                className="block text-p_blue-300 text-sm font-normal mb-2"
                htmlFor="lastname"  
              >
                Lastname
              </label>
              <input 
                id="lastname"
                type="text"
                placeholder="Write your email"
                className="appearance-none border border-bluegray-100 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
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
              value="Sign Up"
            />

            <p className="text-center text-xs mt-8 text-carbon-200">
              Or &nbsp;
              <Link 
                to="/login"
                className="text-p_blue-500 underline"
                title="Go to Login"
              >
                Login
              </Link>
            </p>

          </form>

        </FormContainer>
      
    </Layout>
  );
};