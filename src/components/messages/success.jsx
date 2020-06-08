import React from 'react';

export default function Success({ message, mt = '', mb = '', p = 'p-2' }){
  return (
    <div className={`${p} px-4 bg-green-100 border-l-2 border-green-500 text-green-500 text-s flex items-center ${mt} ${mb}`}>
      <p>
        <svg className="w-5 h-5 mr-2 inline-block" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        { message }
      </p>
    </div>
  );
};