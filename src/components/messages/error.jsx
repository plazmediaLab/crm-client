import React from 'react';

export default function Error({ message, mt = '', mb = '', p = 'p-2' }){
  return (
    <div className={`${p} px-4 bg-red-100 border-l-2 border-red-600 text-red-500 text-sm ${mt} ${mb}`}>
      <p>{ message }</p>
    </div>
  );
};