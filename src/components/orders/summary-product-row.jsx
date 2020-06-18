import React, { useState } from 'react';

export default function SummaryProductRow({ product }){

  const { name, exist, price } = product;

  const [totalPrice, setTotalPrice] = useState(price);

  return (
    <tr>
      <td className="px-3 py-3 text-left">{ name }</td>
      <td className="px-3 py-3">{ `$ ${new Intl.NumberFormat("en-IN").format(price)}` }</td>
      <td className="px-3 py-3">{ `$ ${new Intl.NumberFormat("en-IN").format(totalPrice)}` }</td>
      <td className="px-3 py-3">{ exist }</td>
      <td>
        <input type="number" className="quantity py-2 px-3 rounded border border-gray-300 w-24"/>
      </td>
    </tr>
  );
};