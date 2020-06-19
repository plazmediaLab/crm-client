import React, { useContext } from 'react';
// Reducer
import OrderContext from '../../contex/orders/OrderContext';

export default function SummaryTotal(){

  const orderContext = useContext(OrderContext);
  const { total } = orderContext;

  return (
    <>
      <p className="inline-block mt-4 border-t border-gray-300 px-4 pt-4 pb-0 w-full text-right font-semibold text-p_blue-200">
        TOTAL &nbsp;
        <span className="text-p_blue-500 text-2xl">{ new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(total) }</span>
      </p>
    </>
  );
};