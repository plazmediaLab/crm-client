import React, { useState, useRef } from 'react';
import Error from './messages/error';
// Formik 
import { useFormik } from 'formik';
import * as Yup from 'yup';
// Apollo Client
import { useMutation, gql } from '@apollo/client';

const NEW_CLIENT = gql`
  mutation newClient($input: ClientInput){
    newClient(input:$input){
      id
      name
      lastname
      company
      email
      phone
      seller
    }
  }
`;

export default function NewClientForm(){

  const [activeform, setActiveForm] = useState(true);
  const mainInput = useRef(null);

  // mutation para nuevo cliente
  const [ newClient ] = useMutation(NEW_CLIENT);

  // Validación de formulario con Formik
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      company: '',
      email: '',
      phone: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('This name field is required'),
      lastname: Yup.string().required('This last name field is required'),
      company: Yup.string().required('This company field is required'),
      email: Yup.string().required('This email field is required').email('The Email is not valid'),
    }),
    onSubmit: async values => {
      const { name, lastname, company, email, phone } = values;
      console.log(name);
      console.log(lastname);
      console.log(company);
      console.log(email);
      console.log(phone);

      try {
        const { data } = await newClient({
          variables: {
            input: {
              name,
              lastname,
              company,
              email,
              phone
            }
          }
        })
  
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  })

  // mostrar y ocultar el Formulario
  const ActiveForm = () => {
    setActiveForm(false);
    setTimeout(() => {
      mainInput.current.focus();
    }, 200);
  };

  return (
    <>
      <h1 className="text-center text-xs font-medium bg-gray-300 text-gray-600 uppercase p-2 mt-3">Add new client</h1>

      <form
        className="my-2 bg-white p-4 shadow-md"
        onSubmit={formik.handleSubmit}
      >

        { activeform ? (
          <button 
            type="button" 
            className="text-sm text-green-500 font-semibold flex justify-center items-center w-full p-2 rounded hover:bg-green-500 hover:text-white"
            onClick={ () => ActiveForm() }
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Add new client
          </button>
        ) : (
          <>
            <div className="mb-2">
              <input 
                ref={mainInput}
                id="name"
                type="text"
                placeholder="Name"
                className="inner-form"
                value={formik.values.name}
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              />
              { formik.touched.name && formik.errors.name ? (
                <Error 
                  message={ formik.errors.name }
                  mt='mt-2'
                />
              ) : null }
            </div>
            <div className="mb-2">
              <input 
                id="lastname"
                type="text"
                placeholder="Last name"
                className="inner-form"            
                value={formik.values.lastname}
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              />
              { formik.touched.lastname && formik.errors.lastname ? (
                <Error 
                  message={ formik.errors.lastname }
                  mt='mt-2'
                />
              ) : null }
            </div>
            <div className="mb-2">
              <input 
                id="company"
                type="text"
                placeholder="Company"
                className="inner-form"            
                value={formik.values.company}
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              />
              { formik.touched.company && formik.errors.company ? (
                <Error 
                  message={ formik.errors.company }
                  mt='mt-2'
                />
              ) : null }
            </div>
            <div className="mb-2">
              <input 
                id="email"
                type="text"
                placeholder="Email"
                className="inner-form"            
                value={formik.values.email}
                onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              />
              { formik.touched.email && formik.errors.email ? (
                <Error 
                  message={ formik.errors.email }
                  mt='mt-2'
                />
              ) : null }
            </div>
            <div className="mb-2">
              <input 
                id="phone"
                type="tel"
                placeholder="Phone"
                className="inner-form"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <div>
              <button 
                type="submit"
                className="primary-button p-2 w-full text-sm flex justify-center items-center"
              >
                <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                Add
              </button>
            </div>

            <button 
              type="button"
              className="text-sm text-red-600 w-full p-2 mt-4"
              onClick={ () => {
                setActiveForm(true);
              } }
            >
              Cancel
            </button>
          </>
        ) }

      </form>
    </>
  );
};