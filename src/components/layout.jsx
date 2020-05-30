import React from 'react';
import Seo from './seo';

export default function Layout( props ){
  return (
    <>
      <Seo />

      <main>

        { props.children }

      </main>

    </>
  );
};