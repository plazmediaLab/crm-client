import React from 'react';
import logo from '../images/imagotype-white.svg';
import { css } from '@emotion/core';

export default function LogoWhite({ height = "30px" }){
  return (
    <img src={logo} alt="Logo branding" css={css`height: ${height}; width: auto;`}/>
  );
};