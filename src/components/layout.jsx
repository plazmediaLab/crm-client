import React from 'react';
import Seo from './seo';
import SideBar from './sideBar';
// Reach Router
import { useLocation } from '@reach/router';

export default function Layout( props ){

  const location = useLocation();

  return (
    <>
      <Seo />

      { location.pathname === '/login' || location.pathname === '/sign-up' ? (

        <div className="bg-carbon-600 min-h-screen flex flex-col justify-center">
          
          { props.children }

        </div>

      ) : (

        <div className="flex min-h-screen bg-gray-200">

          <SideBar />

          <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-3">

            { props.children }

          </main>

        </div>

      ) }


    </>
  );
};