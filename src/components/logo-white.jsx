import React from 'react';
import logo from '../images/imagotype-white-transparent.svg';
import { css } from '@emotion/core';

export default function LogoWhite({ height = "24px" }){
  return (
    <img src={logo} alt="Logo branding" css={css`height: ${height}; width: auto;`}/>
  );
};