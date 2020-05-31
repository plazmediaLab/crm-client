import React from 'react';
import { Helmet } from 'react-helmet';

import { ModularCSSfonstRequired } from 'modular-css';
import Favicon from '../images/isotype-white-64px.png';

export default function Seo(){
  return (
    <Helmet>
      <title>CRM-CLIENT</title>
      <link href={ModularCSSfonstRequired} rel="stylesheet" />
      <link rel="icon" href={ Favicon }/>
      <meta name="theme-color" content="#070707" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400&display=swap" rel="stylesheet"/>
    </Helmet>
  );
};