import React from 'react';
// Reach Router
import { Link } from '@reach/router';
import LogoWhite from './logo-white';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return { 
        className: isCurrent ? "navLinkActive" : "navLink"
      };
    }}
  />
);

export default function SideBar(){
  return (
    <aside className="bg-white sm:w-1/3 xl:w-1/5 sm:min-h-screen flex flex-col">

      <div className="bg-p_blue-500 border-r border-b border-p_blue-700 flex justify-center p-4">
        <LogoWhite 
          height='24px'
        />
      </div>

      <div className="border-r border-gray-400 min-h-0 flex-grow">
        <h1 className="text-sm text-white font-medium uppercase text-carbon-500 my-5 ml-4">(CRM) Administrator</h1>
        <nav className="list-none">
          <li>
            <NavLink to="/">
              <div  className="flex items-center">
                <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg> 
                Clients
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" >
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                Orders
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" >
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                Products
              </div>
            </NavLink>
          </li>
        </nav>
      </div>

      <div className="text-center p-2 text-carbon-200 border-r border-gray-400">
        <small>Created by Plazmedia 2020 &copy;</small>
      </div>

    </aside>
  );
};