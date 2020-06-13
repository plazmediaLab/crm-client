import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
// react Select 
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


// Options rect select
const options = [
  { id: 'chocolate', name: 'Chocolate' },
  { id: 'strawberry', name: 'Strawberry' },
  { id: 'vanilla', name: 'Vanilla' },
  { id: 'graphe', name: 'Graphe' },
  { id: 'coffe', name: 'Coffe' },
];
// Animación para elementos seleccionados
const animatedComponents = makeAnimated();

const OrdersPage = () =>{

  // Local State
  const [sabores, setSabores] = useState([]);

  useEffect(() => {
    console.log(sabores);
  }, [sabores]);

  // Función onChange para agregar las selecciones al Local State
  const seleccionatSabores = sab => {
    setSabores(sab)
  };

  return(
    <Layout>
  
      <div className="flex">
  
        <div className="w-9/12 pr-5">
          <div className="flex items-center justify-between">
            <h2 className="titlePage">Orders</h2>
          </div>
  
          <Select 
            options={options} 
            isMulti
            components={animatedComponents}
            onChange={ item => seleccionatSabores(item)}
            // obtener [value] renombrado id del array de opciones
            getOptionValue={item => item.id}
            // obtener [label] renombrado name del array de opciones
            getOptionLabel={item => item.name}
            // placeholder del input 
            placeholder='Seleccione los sabores'
            // mensaje al no encontrar elementos buscados 
            noOptionsMessage={() => 'Sin resultados encontrados'}
          />
  
        </div>
        
        <div className="w-3/12">
          <p>Side Section</p>
        </div>
        
      </div>  
  
    </Layout>
  )
} 

export default OrdersPage