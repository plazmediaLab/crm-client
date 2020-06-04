import React from 'react';
import { Helmet } from 'react-helmet';

import { ModularCSSfonstRequired } from 'modular-css';
import Favicon from '../images/isotype-white-32px.png';

export default function Seo(){
  return (
    <Helmet>
      <title>CRM-CLIENT</title>
      <link href={ModularCSSfonstRequired} rel="stylesheet" />
      <link rel="icon" href={ Favicon }/>
      <meta name="theme-color" content="#070707" />
    </Helmet>
  );
};