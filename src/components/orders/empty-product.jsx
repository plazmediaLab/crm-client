import React from 'react';
// React Animations
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { fadeIn } from 'react-animations';

const FadeIn = keyframes`${fadeIn}`;
 
const BouncyDiv = styled.div`
  animation: .5s ${FadeIn};
`;

export default function EmptyProducts(){
  return (
    <BouncyDiv className="p-10 text-center bg-pink-100 text-pink-200 mt-4">
      <p className="mb-5 font-semibold text-xl">Empty product list</p>
      <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>
    </BouncyDiv>
  );
};