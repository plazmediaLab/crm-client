import React, { useState } from "react";
// Components
import ProductsTable from "../components/products/products-table";
import NewProductForm from "../components/products/new-product-form";
import ProductEdit from "../components/products/product-edit";

const ProductsPage = () => {
  
  const [edit, setEdit] = useState(false);
  const [product, setProduct] = useState({});
  
  return (
    <div className="flex">
      <div className="w-9/12 pr-5">
        <div className="flex items-center justify-between">
          <h2 className="titlePage">List of products in stock</h2>
        </div>

        <hr className="border-gray-300 w-full my-4"/>

        <p className="text-p_blue-500 text-sm flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path></svg>
          Add new product registration
        </p>

        { !edit ? (
          
          <NewProductForm />

        ) : (

          <ProductEdit setEdit={ setEdit } product={ product } />
          
        )}

        <ProductsTable edit={ edit } setEdit={ setEdit } setProduct={ setProduct } />

      </div>
      
      <div className="w-3/12">
        <p>Side Section</p>
      </div>
    </div>
  )
};

export default ProductsPage