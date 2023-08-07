//import {Fragment} from "react"


/* const newMessage={
    nombre:'Wilmara',
    apellido:'Ruiz',
}; */

/* const saludo = (nombre)=>{
    return <h2>Hola Mundo mi nombre es {nombre}</h2>
}
 *///esto es props y se debe enviar de los props del padre
import PropTypes from 'prop-types';

 const FirstApp = ({title,subTitle,name} ) => {

/* console.log(props) */

/* if(!title){
  throw new Error('El title no existe')
} */

  return (
    <>
       {   /* esta es la manera de trabajar objetos ya que no se puede aceder a ellos directamente o se puede intancias el 
            objeto como ejemplo {persona.nomre }  */}
{/*      <code>{ JSON.stringify(newMessage) }</code> */}
     <h2>{title}</h2>
     <h3>{name}</h3>

  </>
  )
}

export default FirstApp
//Definir el componente de props
FirstApp.propTypes={
  title:PropTypes.string.isRequired,
  subTitle:PropTypes.number.isRequired
}

FirstApp.defaultProps={
  title:'No hay titulo',
  subTitle:'No hay subtitulos',
  name:'Wilmara Ruiz'
}

///Tarea 