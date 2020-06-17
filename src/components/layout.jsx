import React from 'react';
import Seo from './seo';
import SideBar from './sideBar';
// Components
import Header from './header';

export default function Layout({ location, children }){

  return (
    <>
      <Seo /> 

      { location.pathname === '/login' || location.pathname === '/sign-up' ? (

        <div className="bg-carbon-600 min-h-screen flex flex-col justify-center">
          
          { children }

        </div>

      ) : (

        <div className="flex min-h-screen bg-gray-200">

          <SideBar />

          <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen">

            <Header />

            <div className="px-5 py-3">
              
              { children }

            </div>

          </main>

        </div>

      ) }


    </>
  );
};