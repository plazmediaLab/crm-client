import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from '@reach/router';

// Components
import Layout from "../components/layout";
import FormContainer from '../components/form-container';
import LogoWhite from '../components/logo-white';
import Error from '../components/messages/error';
// Formik 
import { useFormik } from 'formik';
import * as Yup from 'yup'; 
// Apollo Client
import { useMutation, gql } from '@apollo/client';
// Sweet Alert
import Swal from 'sweetalert2'

const USER_AUTH = gql`
  mutation authUser($input: AuthInput){
    authUser(input: $input){
      token
    }
  }
`;

export default function Login(){

  const push = useNavigate();
  const mainInput = useRef(null);

  // Focus a input al montar el componete
  useEffect(() => {
    mainInput.current.focus();
  }, []);

  // Utenticar Usuario
  const [ authUser ] = useMutation(USER_AUTH);

  // Validaciones con Formik
  const formik = useFormik({
    // valores iniciales
    initialValues: {
      email: '',
      password: ''
    },
    // validadiones de los campos con Yup
    validationSchema: Yup.object({
      email: Yup.string().email('The Email is not valid').required('The email field is required'),
      // TODO · Cambiar a minimo 6 caracteres 06/03/2020 
      password: Yup.string().required('The password field is required').min(3, 'The password must have at least 6 characters')
    }),
    // Función Submit
    onSubmit: async val => {

      const { email, password } = val;
      
      try {
        
        // Query a la DB
        const { data } = await authUser({
          variables: {
            input: {
              email,
              password
            }
          }
        })

        // Almacenar Token en Local Storage
        localStorage.setItem('pm-token', data.authUser.token);

        // Mostrar SweetAlert y redireccionar al finalizar
        Swal.fire({
          position: 'center',
          title: 'Loading...',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          // onAfterClose: () => {
          // }
        })
        
        push('/');

      } catch (error) {

        Swal.fire({
          toast: true,
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

        <div className="grid justify-center align-middle my-3 mt-6">
          <LogoWhite />
        </div>

        <FormContainer>

          <form
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-4">
              <label 
                className="block text-p_blue-300 text-sm font-normal mb-2"
                htmlFor="email"  
              >
                Email
              </label>
              <input 
                ref={mainInput}
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