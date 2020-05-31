import React from 'react';
// Reach Router
import { Link } from '@reach/router';
// Styled Components 
import styled from '@emotion/styled';
import logo from '../images/imagotype-white-transparent.svg'

const Logo = styled.div`
  display: block;
  width: auto;
  height: 22px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 1rem;
`;

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
    <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-4">

      <div>
        <Logo />
        <hr className="border-gray-700 my-2"/>
        <h1 className="text-lg text-white font-medium uppercase">(CRM) Administrator</h1>
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