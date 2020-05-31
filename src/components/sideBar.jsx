import React from 'react';
// Reach Router
import { Link } from '@reach/router';

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
    <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-3 pl-5">

      <div>
        <h1 className="text-2xl text-white font-bold">CRM Clients</h1>
      </div>

      <nav className="mt-5 list-none">
        <li>
          <NavLink to="/">Clients</NavLink>
        </li>
        <li>
          <NavLink to="/products" >Products</NavLink>
        </li>
        <li>
          <NavLink to="/orders" >Orders</NavLink>
        </li>
      </nav>

    </aside>
  );
};