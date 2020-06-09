import React from "react";
// Components
import Layout from "../components/layout";
import Error from '../components/messages/error';
// Appollo Client
import { useMutation, gql } from '@apollo/client';
// Reach Router
import { useNavigate } from '@reach/router';
// Formik 
import { useFormik } from 'formik';
import * as Yup from 'yup';
// Sweet Alert
import Swal from 'sweetalert2';

const UPDATE_CLIENT = gql`
  mutation updateClient($id: ID!, $input: ClientInput){
    updateClient(id: $id, input: $input){
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


const EditClient = (props) => {

  const push = useNavigate();

  const clientInfo = props.location.state.client;
  const { id, name, lastname, company, email, phone } = clientInfo;

  const formik = useFormik({
    initialValues:{
      name,
      lastname,
      company,
      email,
      phone
    },
    validationSchema: Yup.object({
      name: Yup.string().required('This name field is required'),
      lastname: Yup.string().required('This last name field is required'),
      company: Yup.string().required('This company field is required'),
      email: Yup.string().required('This email field is required').email('The Email is not valid'),
    }),
  });

  // Apollo Client Mutation 
  const [ updateClient ] = useMutation(UPDATE_CLIENT);

  const Submit = async () => {
    const { name, lastname, company, email, phone } = formik.values;

    if(Object.keys(formik.errors).length === 0){
      try {
        await updateClient({
          variables: {
            id,
            input: {
              name,
              lastname,
              company,
              email,
              phone
            }
          }
        });
    
        push(-1);
    
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'The changes has been saved',
          showConfirmButton: false,
          timer: 3000,
          toast: true,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          },
        })
      } catch (error) {
        console.log(error);
      }
    }else{
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Check the required fields!',
        showConfirmButton: false,
        timer: 3000,
        toast: true,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
      })
    }

  };

  return (
    <Layout>
      
        <div className="flex">
          <div className="w-9/12 pr-5">
            <div className="flex items-center bg-white mt-2">
              <button 
                title="Return without saving changes!"
                className="bg-red-600 hover:bg-red-500 text-white p-4"
                onClick={() => push(-1)}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
              </button>
              <h3 className=" px-3 font-semibold text-sm uppercase text-carbon-300 bg-white">Edit customer: <span className="font-light">{`${name} ${lastname}`}</span></h3>
            </div>

            <form
              className="bg-white rounded p-4 mt-6 shadow-md"
            >
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  <label 
                    className="block text-p_blue-300 text-sm font-normal mb-2"
                    htmlFor="name"  
                  >
                    <span className="font-semibold text-red-500">*</span> Name
                  </label>
                  <input
                    required 
                    id="name"
                    type="text"
                    placeholder={`Before edit: ${name}`}
                    className="appearance-none border border-bluegray-100 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label 
                    className="block text-p_blue-300 text-sm font-normal mb-2"
                    htmlFor="lastname"  
                  >
                    <span className="font-semibold text-red-500">*</span> Last name
                  </label>
                  <input
                    required 
                    id="lastname"
                    type="text"
                    placeholder={`Before edit: ${lastname}`}
                    className="appearance-none border border-bluegray-100 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>

              { formik.touched.name && formik.errors.name ? (
                <Error 
                  message={ formik.errors.name }
                  mb='mb-3'
                />
              ) : null }
              { formik.touched.lastname && formik.errors.lastname ? (
                <Error 
                  message={ formik.errors.lastname }
                  mb='mb-3'
                />
              ) : null }

              <div className="flex mb-2">
                <div className="w-1/3 pr-2">
                  <label 
                    className="block text-p_blue-300 text-sm font-normal mb-2"
                    htmlFor="company"  
                  >
                    <span className="font-semibold text-red-500">*</span> Company
                  </label>
                  <input
                    required 
                    id="company"
                    type="text"
                    placeholder={`Before edit: ${company}`}
                    className="appearance-none border border-bluegray-100 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="w-1/3 pl-2">
                  <label 
                    className="block text-p_blue-300 text-sm font-normal mb-2"
                    htmlFor="email"  
                  >
                    <span className="font-semibold text-red-500">*</span> Email
                  </label>
                  <input
                    required 
                    id="email"
                    type="text"
                    placeholder={`Before edit: ${email}`}
                    className="appearance-none border border-bluegray-100 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="w-1/3 pl-4">
                  <label 
                    className="block text-p_blue-300 text-sm font-normal mb-2"
                    htmlFor="phone"  
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder={`Before edit: ${ phone !== "" ? phone : "EMPTY" }`}
                    className="appearance-none border border-bluegray-100 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>

              { formik.touched.company && formik.errors.company ? (
                <Error 
                  message={ formik.errors.company }
                  mb='mb-3'
                />
              ) : null }
              { formik.touched.email && formik.errors.email ? (
                <Error 
                  message={ formik.errors.email }
                  mb='mb-3'
                />
              ) : null }

            </form>

            <p className="tetx-xs text-gray-400 text-center py-5">
              The fields with (*) are required and cannot remain empty to be saved.
            </p>

          </div>
          
          <div className="w-3/12">
            <div className="p-4 text-center text-p_blue-300 flex flex-col items-center border-dashed border border-p_blue-500 rounded">
              <svg className="w-10 h-10 mb-2 text-p_blue-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              <p>The change of the information related to this client must be taken as an important change, since the information prior to the change cannot be recovered once the new information is processed.</p>
            </div>

            <button 
              type="submit"
              className="mt-3 bg-green-500 hover:bg-green-600 text-center inline-block p-2 rounded text-white text-sm font-semibold w-full flex items-center justify-center"
              onClick={Submit}
            >
              <svg className="w-8 h-8 pr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
              Save changes
            </button>

          </div>
        </div>

    </Layout>
  )
}

export default EditClient