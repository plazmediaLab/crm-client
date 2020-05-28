import React from 'react';
import { Helmet } from 'react-helmet';

import { ModularCSSfonstRequired } from 'modular-css';

export default function Seo(){
  return (
    <Helmet>
      <title>CRM-CLIENT</title>
      <link href={ModularCSSfonstRequired} rel="stylesheet" />
    </Helmet>
  );
};