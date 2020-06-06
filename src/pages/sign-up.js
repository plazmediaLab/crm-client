import React from 'react';
import { Link, useNavigate } from '@reach/router';

import Layout from '../components/layout';
import FormContainer from '../components/form-container';
import LogoWhite from '../components/logo-white';
import Error from '../components/messages/error';
// Formik 
import { useFormik } from 'formik';
import * as Yup from 'yup';
// Sweet Alert
import Swal from 'sweetalert2'

// Apollo GraphQL
import { useMutation, gql } from '@apollo/client';

const NEW_ACCOUNT = gql`
  mutation newUser($input: UserInput){
    newUser(input: $input){
      id
      name
      lastname
      email
      created
    }
  }
`;

export default function SignUp(){

  // GraphQL Mutation
  const [ newUser ] = useMutation(NEW_ACCOUNT);

  // Reach Router Push
  const push = useNavigate();

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
    onSubmit: async (val, { resetForm }) => {
      // console.log('Send');
      // console.log(val);
      const { name, lastname, email, password } = val;

      try {
        const { data } = await newUser({
          variables:{
            input: {
              name,
              lastname,
              email,
              password,
            }
          }
        })
        
        // resetForm({ val: '' })

        Swal.fire({
          icon: 'success',
          title: 'User created successfully',
          text: `Account by: ${data.newUser.name}`,
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 2500,
          onClose: () => {
            push('/login');
          }
        });

        
      } catch (error) {

        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Oops...',
          text: error.message,
          showConfirmButton: false,
          timer: 2000,
          backdrop: false,
          timerProgressBar: true,
        })
        
      }
      
    }
  })

  return (
    <Layout>

        <div className="grid justify-center align-middle mb-3 mt-6">
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
              className="primary-button p-3 w-full mt-5"
              value="Sign Up"
            />

            <p className="text-center text-xs mt-8 text-carbon-200">
              Or &nbsp;
              <Link 
                to="/login"
                className="text-p_blue-500 underline"
                title="Go to Login"
              >
                Log in
              </Link>
            </p>

          </form>

        </FormContainer>
      
    </Layout>
  );
};