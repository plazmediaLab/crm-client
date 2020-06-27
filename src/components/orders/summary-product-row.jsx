import React, { useState, useEffect, useContext } from 'react';
// Context
import OrderContext from '../../contex/orders/OrderContext';

import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { fadeIn } from 'react-animations';

const FadeIn = keyframes`${fadeIn}`;
 
const BouncyTr = styled.tr`
  animation: .5s ${FadeIn};
`;

function SummaryProductRow({ product }){

  
  const { name, exist, price } = product;
  
  const [totalPrice, setTotalPrice] = useState(price);
  const [quantityNum, setQuantityNum] = useState(1);
  
  // Context
  const orderContext = useContext(OrderContext);
  const { productsQuantity } = orderContext;
  
  useEffect(() => {
    if(Number(quantityNum) === 0){
      setQuantityNum(1);
    }
    // console.log(product);
    setTotalPrice(price * Number(quantityNum));
    updateProduct();
    // eslint-disable-next-line
  }, [quantityNum]);

  const updateProduct = () => {
    const newProduct = {...product, quantity: Number(quantityNum) }
    if(newProduct.quantity){
      // console.log(newProduct.quantity);
      productsQuantity(newProduct);
    }
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
          min='1'
          type="number" 
          className="quantity py-2 px-3 rounded border border-gray-300 w-24 leading-tight focus:outline-none focus:shadow-outline"
          value={ quantityNum }
          onChange={ e => setQuantityNum(e.target.value) }
        />
      </td>
    </BouncyTr>
  );
};

export default React.memo(SummaryProductRow);