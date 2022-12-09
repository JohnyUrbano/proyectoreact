import { useState } from 'react'


function Registro() {
  const [count, setCount] = useState(0)

  return (
    <div className="Registro" id='registro'>
      <div className='banner' id='banner2'>
        
        <h3>InstaYa </h3>
       
      </div>
      <div>
        <br />
      </div>

      <div className="card" id='card2'>
        <form action="/" className='formularioIngreso' >
            <p>Nombre: <br />
            <input type='text' name="" id="" /> </p>
            <p>usuario: <br />
            <input type="text" name="" id="" /></p>
            <p>Correo: <br />
            <input type="email" name="" id="" /></p>
            <p>Contraseña: <br />
            <input type="password" name="" id="" />
            </p>
            <br/>
            <input className="botons" type="submit" value="Registrarse"></input>  
        </form>
      </div>

      
    </div>
  )
}

export default Registro
