import React from 'react';
import Seo from './seo';
import SideBar from './sideBar';

export default function Layout( props ){
  return (
    <>
      <Seo />

      <div className="flex min-h-screen">

        <SideBar />

        <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-3">

          { props.children }

        </main>
      </div>


    </>
  );
};