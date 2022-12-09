import { useState } from 'react'
import {Link} from 'react-router-dom'



function CrearEntrega() {
  const [count, setCount] = useState(0)

  return (
    <div className="crearEntrega" id='crearEntrega'>
      <p className='titulo'>Gestión de paquetes - Registro de órdenes</p>
      <div class="grid-container">
      <div class="item1"><p> Fecha: <input type="date" name="" id="" /></p></div>
        <div class="item2"><p>Hora: <input type="time" name="" id="" /></p></div>
        <div class="item3"><p>Largo: <input type="text" name="" id="" size="2"/></p></div>  
        <div class="item4"><p>Ancho: <input type="text" name="" id="" size="2"/></p></div>
        <div class="item5"><p>Alto: <input type="text" name="" id="" size="2"/></p></div>
        <div class="item6"><p>Peso: <input type="text" name="" id="" size="2"/></p></div>
        <div class="item7"><p className='registro'>Dirección recogida: <input type="text" name="" id=""/></p></div>
        <div class="item8"><p className='registro'>Ciudad recogida: <input type="text" name="" id=""/></p></div> 
        <div class="item7"><p className='registro'>Nombre destinatario: <input type="text" name="" id=""/></p></div>
        <div class="item7"><p className='registro'>Cédula/Nit destinatario: <input type="text" name="" id=""/></p></div>  
        <div class="item7"><p className='registro'>Dirección entrega: <input type="text" name="" id=""/></p></div>
        <div class="item7"><p className='registro'>Ciudad entrega: <input type="text" name="" id=""/></p></div>   
      </div>
    <br />
    <p align="right"><a align="right" href="/gestion"><button type="button" class="btn btn-primary">Crear orden</button></a></p>
 
    </div>
  )
}

export default CrearEntrega
