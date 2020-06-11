import React, { useState } from 'react';
// Formik
import { useFormik } from 'formik';
import * as Yup from 'yup';
// Apollo Client
import { useMutation, gql } from '@apollo/client';
// Components 
import Error from '../messages/error';
// Sweet Alert
import Swal from 'sweetalert2';

const UPDATE_PRODUCT = gql`
  mutation updateProduct($id: ID!, $input: ProductInput){
    updateProduct(id: $id, input: $input){
      id
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

export default function ProductEdit({ product, setEdit }){

  const { id, name, exist, price } = product;

  
  const [productstate, setProductState] = useState({
    nameState: name,
    existState: exist,
    priceState: price
  });

  const [ updateProduct ] = useMutation(UPDATE_PRODUCT,
    {
      update(cache, { data: { newProduct } }) {
        // obtener el objeto de cache que deseamos actualizar
        const { getProducts } = cache.readQuery({ query: GET_PRODUCTS });
        // Reescribimos el cache ( el cache nunca se debe modificar )
        cache.writeQuery({
          query: GET_PRODUCTS,
          data: { 
            getProducts: [ ...getProducts, updateProduct ]
          },
        });
      }
    } 
  );

  const formik = useFormik({
    initialValues: {
      name: productstate.nameState,
      exist: productstate.existState,
      price: productstate.priceState
    },
    validationSchema: Yup.object({
      name: Yup.string().trim('Blank characters are not valid as a value').required('The name field is required'),
      exist: Yup.number().positive('Quantity has to be positive').integer('The quantity has to be an integer').required('Quantity in stock field is required'),
      price: Yup.number().positive('Quantity has to be positive').required('The price field is required'),
    }),
    onSubmit: async values => {
      const { name, exist, price } = values;

      try {

        await updateProduct({
          variables: {
            id,
            input: {
              name, 
              exist,
              price
            }
          }
        });

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'The product has been updated',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        })

        setEdit(false);

      } catch (error) {
        console.log(error);
      }

    }
  })

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between bg-yellow-100 text-sm">
        <button 
          type="button"
          className="text-white bg-red-600 py-3 px-5"
          onClick={() => setEdit(false)}
        >
          Cancel
        </button>
        <p className="inline-block flex items-center px-3 text-yellow-600">
          Changes made cannot be reversed
          <svg className="w-4 h-4 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </p>
      </div>

      <form 
        className="grid grid-cols-12 gap-3 mt-4"
        onSubmit={formik.handleSubmit}
      >
        <div className="col-span-6">
          <input 
            id="name"
            type="text"
            title={`Product name * Before: ${productstate.nameState}`}
            placeholder={`* Before: ${productstate.nameState}`}
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
            title={`Quantity in stock * Before: ${productstate.existState}`}
            placeholder={`* Before: ${productstate.existState}`}
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
            title={`Price by unit * Before: ${productstate.priceState}`}
            placeholder={`* Before: ${productstate.priceState}`}
            className="appearance-none border border-bluegray-100 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <button 
          type="submit"
          className="bg-green-500 text-white rounded text-center px-4 col-span-2 hover:bg-green-600" 
        >
          Save
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

    </div>
  );
};