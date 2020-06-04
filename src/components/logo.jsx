import React from 'react';
import logo from '../images/imagotype-dark.svg';
import { css } from '@emotion/core';

export default function Logo({ height = "24px" }){
  return (
    <img src={logo} alt="Logo branding" css={css`height: ${height}; width: auto;`}/>
  );
};