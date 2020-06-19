import React, { useState, useEffect } from 'react';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { fadeIn } from 'react-animations';

const FadeIn = keyframes`${fadeIn}`;
 
const BouncyTr = styled.tr`
  animation: .5s ${FadeIn};
`;

export default function SummaryProductRow({ product }){

  const { name, exist, price } = product;

  const [totalPrice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setTotalPrice(price * Number(quantity));
  }, [quantity]);

  const updateQuantity = e => {
    setQuantity(e.target.value);
  };

  return (
    <BouncyTr>
      <td className="px-3 py-3 text-left">{ name }</td>
      <td className="px-3 py-3">{ new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(price) }</td>
      <td className="px-3 py-3">{ new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(totalPrice) }</td>
      <td className="px-3 py-3">{ exist }</td>
      <td>
        <input
          max={ exist }
          min='0'
          type="number" 
          className="quantity py-2 px-3 rounded border border-gray-300 w-24 leading-tight focus:outline-none focus:shadow-outline"
          value={ quantity }
          onChange={e => updateQuantity(e)}
        />
      </td>
    </BouncyTr>
  );
};