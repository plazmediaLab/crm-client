import React from 'react';

export default function Error({ message, mt = '', mb = '', p = 'p-2', bg = 'bg-red-100', txt = 'text-red-500', br = ''}){
  return (
    <div className={`${p} ${br} px-4 ${bg} ${txt} border-l-2 border-red-600 text-sm ${mt} ${mb}`}>
      <p>{ message }</p>
    </div>
  );
};