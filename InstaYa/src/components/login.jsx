import { useState } from 'react'
import {Link} from 'react-router-dom'



function Login() {
  const [count, setCount] = useState(0)

  const handleSubmit = e => {
    e.preventDefault();

    /*const data = { title, body };*/
    const data = new FormData(formularioIngreso);
    data.get("textEmail");

    const userData =
    {
      email: data.get("textEmail"),
      pass: data.get("textPass")
    }
    alert(userData.email)
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    };
    fetch("https://localhost:5173/", requestOptions)
      .then(response => response.json())
      .then(data => {console.log('Los datos se recibieron', data)})
      .then(res => console.log(res));
  };

  return (
    <div className="Login" id='login'>
      <div className='banner' id='banner'>
        <p className='titulo'>InstaYa</p>
       
      </div>
      <div>
        <br />
      </div>

      <div className="card" id='card'>
          <form action="/gestion" className='formularioIngreso' id='formularioIngreso'>
            
            <p align="right"> <a href="/register" >Registrarse</a></p>
            <p>Correo: <br />
            <input type="email" name="textEmail" id="textEmail" /></p>
            <p>Contraseña:  <br />
            <input type="password" name="textPass" id="textPass" /></p> 
            <br />
            <input type="submit" value="Ingresar" onClick={handleSubmit}/>
            
            
        </form>
      </div>

      
    </div>
  )
}

export default Login
