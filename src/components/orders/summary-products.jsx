import React, { useContext } from 'react';
// Context
import OrderContext from '../../contex/orders/OrderContext';
import SummaryProductRow from './summary-product-row';

export default function SummaryProducts(){

  const orderContext = useContext(OrderContext);
  const{ products } = orderContext;

  return (
    <div className="content-step border-pink-500 mt-5">
      <div className="flex justify-between items-center">
        <h3 className="text-pink-500">Order summary</h3>
        <p className="text-gray-500">Products (<span className="font-bold">0</span>)</p>
      </div>

      { products.length > 0 ? (
        <table className="table-auto w-full mt-6">
          <thead>
            <tr className="text-carbon-500 font-medium text-xs">
              <th className="w-5/10 px-4 py-3 border-gray-400">Product</th>
              <th className="w-2/10 px-4 py-3 border-gray-400" title="Price by unit">P/U</th>
              <th className="w-2/10 px-4 py-3 border-gray-400" title="Total price">T/P</th>
              <th className="w-2/10 px-4 py-3 border-gray-400" title="Total price">Stock</th>
              <th className="w-1/10 px-4 py-3 border-gray-400">Quantity</th>
            </tr>
          </thead>
          <tbody className="text-sm bg-white text-center">
            { products.map((product, index) => (
              <SummaryProductRow
                key={product.id}
                product={product}
              />
            )) }
          </tbody>
        </table>
      ) : (
        <p>No hay productos</p>
      )}


    </div>
  );
};