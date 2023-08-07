import React from "react";
import ReactDOM from "react-dom/client";
//asi se importa un archivo de css
import './styles.css'

import {HelloWorldApp} from './HelloWorldApp'
//import FirstApp from './FirstApp'
import CounterApp from './CounterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
   < React.StrictMode>
   {/* <HelloWorldApp/> */}
   <CounterApp value={ 123 }/>
   {/* asi se envian los props de padre  */}
    {/* <FirstApp title="Hola, Soy Mara" subTitle={ 123 }/> */}
  {/*   <FirstApp  title="Soy Gocu"/> */}
   </React.StrictMode >

)