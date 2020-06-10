import React from 'react';
// Apollo Client
import  { useMutation, gql } from '@apollo/client';
// Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
// Components 
import Error from '../messages/error';
// Sweet Alert
import Swal from 'sweetalert2'; 

const NEW_PRODUCT = gql`
  mutation newProduct($input: ProductInput){
    newProduct(input: $input){
      id
      name
    }
  }
`;
const GET_PRODUCTS = gql`
  query{
    getProducts{
      id
      name
      exist
      price
    }
  }
`;

export default function NewProductForm(){

  // Apollo mutation
  const [ newProduct ] = useMutation(NEW_PRODUCT, 
    {
      update(cache, { data: { newProduct } }) {
        // obtener el objeto de cache que deseamos actualizar
        const { getProducts } = cache.readQuery({ query: GET_PRODUCTS });
        // Reescribimos el cache ( el cache nunca se debe modificar )
        cache.writeQuery({
          query: GET_PRODUCTS,
          data: { 
            getProducts: [ ...getProducts, newProduct ]
          },
        });
      }
    }  
  );

  // Formik Validar formulario
  const formik = useFormik({
    initialValues: {
      name: '',
      exist: '',
      price: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().trim('Blank characters are not valid as a value').required('The name field is required'),
      exist: Yup.number().positive('Quantity has to be positive').integer('The quantity has to be an integer').required('Quantity in stock field is required'),
      price: Yup.number().positive('Quantity has to be positive').required('The price field is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      const { name, exist, price } = values;

      try {

        // Mutation
        await newProduct({
          variables:{
            input: {
              name,
              exist,
              price,
            }
          }
        });
        
        // Sweed Alert
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'The product has been added',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        });

        // Resetear el formulario
        resetForm({ initialValues: '' });

      } catch (error) {
        console.log(error);
      }

    }  
  });

  return (
    <>
      <form 
        className="grid grid-cols-12 gap-3 mt-3"
        onSubmit={formik.handleSubmit}
      >
        <div className="col-span-6">
          <input 
            id="name"
            type="text"
            placeholder="* Write the product name"
            className="appearance-none border border-bluegray-100 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="col-span-2">
          <input 
            id="exist"
            type="number"
            title="Quantity in stock"
            placeholder="* Quantity in stock"
            className="appearance-none border border-bluegray-100 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formik.values.exist}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="col-span-2">
          <input 
            id="price"
            type="number"
            title="Price by unit"
            placeholder="* Price by unit"
            className="appearance-none border border-bluegray-100 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <button 
          type="submit"
          className="primary-button text-center px-4 col-span-2" 
        >
          Add
        </button>


      </form>

      <div className="grid grid-cols-12 col-gap-3 mt-1">
        <div className="col-span-4">
          { formik.touched.name && formik.errors.name ? (
            <Error 
              message={ formik.errors.name }
              mt='mt-3'
            />
          ) : null }
        </div>
        <div className="col-span-4">
          { formik.touched.exist && formik.errors.exist ? (
            <Error 
              message={ formik.errors.exist }
              mt='mt-3'
            />
          ) : null }
        </div>
        <div className="col-span-4">
          { formik.touched.price && formik.errors.price ? (
            <Error 
              message={ formik.errors.price }
              mt='mt-3'
            />
          ) : null }
        </div>
      </div>
    </>
  );
};