import React from 'react';
// Reach Router
import { Link } from '@reach/router';
import Logo from './logo';

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
    <aside className="bg-white border border-gray-400 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-4">

      <div>
        <div className="mb-5">
          <Logo />
        </div>
        <hr className="border-gray-400 my-5"/>
        <h1 className="text-center text-sm text-white font-medium uppercase text-carbon-400">(CRM) Administrator</h1>
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