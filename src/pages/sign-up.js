import React from 'react';
import { Link } from '@reach/router';

import Layout from '../components/layout';
import FormContainer from '../components/form-container';
import LogoWhite from '../components/logo-white';
import Error from '../components/messages/error';
// Formik 
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function SignUp(){

  // Validación de formulario
  const formik = useFormik({
    // Valores iniciales de los datos a validar
    initialValues: {
      name: '',
      lastname: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('The name field is required'),
      lastname: Yup.string().required('The lastname field is required'),
      email: Yup.string().email('The email is not valid').required('The email field is required'),
      password: Yup.string().required('The password field is required').min(6, 'The password must have at least 6 characters')
    }),
    onSubmit: val => {
      console.log('Send');
      console.log(val);
    }
  })

  return (
    <Layout>

        <div className="grid justify-center align-middle mb-3">
          <LogoWhite />
        </div>

        <FormContainer>

          <form
            onSubmit={formik.handleSubmit}
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
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              { formik.touched.name && formik.errors.name ? (
                <Error 
                  message={ formik.errors.name }
                  mt='mt-3'
                />
              ) : null }
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
                value={formik.values.lastname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              { formik.touched.lastname && formik.errors.lastname ? (
                <Error 
                  message={ formik.errors.lastname }
                  mt='mt-3'
                />
              ) : null }
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
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              { formik.touched.email && formik.errors.email ? (
                <Error 
                  message={ formik.errors.email }
                  mt='mt-3'
                />
              ) : null }
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
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              { formik.touched.password && formik.errors.password ? (
                <Error 
                  message={ formik.errors.password }
                  mt='mt-3'
                />
              ) : null }
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