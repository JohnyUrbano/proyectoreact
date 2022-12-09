import reactLogo from './assets/react.svg'
import './App.css'
import { useState } from 'react'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './components/login'
import Registro from './components/registro'
import GestionPaquetes from './components/gestionPaquetes'
import CrearEntrega from './components/crearEntrega'
import ActualizarEntrega from './components/acutalizarEntrega'
import Prueba from './components/prueba'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Registro/>}></Route>
          <Route path='/gestion' element={<GestionPaquetes/>}></Route>
          <Route path='/crear' element={<CrearEntrega/>}></Route>
          <Route path='/actualizar' element={<ActualizarEntrega/>}></Route>
          <Route path='/prueba' element={<Prueba/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
