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
            <NavLink to="/">Clients</NavLink>
          </li>
          <li>
            <NavLink to="/orders" >Orders</NavLink>
          </li>
          <li>
            <NavLink to="/products" >Products</NavLink>
          </li>
        </nav>
      </div>

      <div className="text-center p-2 text-carbon-200 border-r border-gray-400">
        <small>Created by Plazmedia 2020 &copy;</small>
      </div>

    </aside>
  );
};