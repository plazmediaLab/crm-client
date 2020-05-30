import React from 'react';
import Seo from './seo';



export default function Layout( props ){
  return (
    <>
      <Seo />

      <h1 className="bg-p-blue-50 txt-w p-5">From layout component...</h1>

      { props.children }

    </>
  );
};