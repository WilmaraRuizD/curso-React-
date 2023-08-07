import PropTypes from 'prop-types';
//Hooks 
import { useState } from 'react';

function CounterApp({value}) {

    const [counter,setCounter]=useState(value);

    //funcion incremento
    const handleAdd=()=>{
        //setCounter(counter+1);

        //asi tambien se puede cambiar el valor de la counter
        setCounter((c)=>c+1)
       
    }

  //funcion decrement
    const handleDec=()=>setCounter(counter-1)
        
//funcion Rest
    const handleRest=()=>setCounter(value)
    

  return (
  <>
  <h1>CounterApp</h1>
  <h2>{ counter}</h2>
  <button onClick={handleAdd}>+1</button>
  <button onClick={handleDec}>-1</button>
  <button onClick={handleRest}>Reset</button>
  </>
  )
}

export default CounterApp

CounterApp.propTypes = {
value:PropTypes.number.isRequired,
}
