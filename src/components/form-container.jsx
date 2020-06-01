import React from 'react';

export default function FormContainer({ children }){
  return (
    <div className="flex justify-center mt-5">
      <div className="w-full max-w-sm bg-white rounded shadow-lg px-8 pt-10 pb-8 mb-4">

        { children }

      </div>
    </div>
  );
};