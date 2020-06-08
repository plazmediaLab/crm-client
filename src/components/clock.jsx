import React from 'react';
// React Live Clock
import Clock from 'react-live-clock';
import * as moment from 'moment';

const m = moment().get('H');
console.log(m);

export default function LiveClock(){
  return (
    <div className="text-gray-600 text-center mb-5">
      <div className="flex items-center justify-center">
        <Clock className="text-2xl" format={'HH:mm:ss'} timezone={'GMT-5'} />
        { m >= 18 ? (
          <svg className="w-4 h-4 mb-1 ml-2" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        ) : (
          <svg className="w-5 h-5 mb-1 ml-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
        )}
      </div>
      <Clock className="text-sm font-semibold" format={'dddd'} />
      <br/>
      <Clock className="text-sm" format={'DD of MMMM - YYYY'} />
    </div>
  );
};

// Instalation
// $ npm install --save react react-live-clock moment

// format={}                                --> "2014-09-08T08:02:17-05:00" (ISO 8601, no fractional seconds)
// format={"dddd, MMMM Do YYYY, h:mm:ss a"} --> "Sunday, February 14th 2010, 3:25:50 pm"
// format={"ddd, hA"}                       --> "Sun, 3PM"
// format={"[Today is] dddd"}               --> "Today is Sunday"
// format={'YYYY MM DD'}                    --> "Invalid date"

// For more examples [ https://momentjs.com/docs/#/displaying/format/ ]

// timezone={'GMT-5'} --> Zona horaria de Santiago de Querétaro, Qro.