//import { useState } from 'react'
import './App.css'
import Login from './componentes/login.jsx'
import Home from './componentes/home.jsx'

import { useEffect, useState } from 'react'


function App() {
  const [rutaActual, setRutaActual] = useState("app")

  useEffect(() =>{ //nor permite detectar un cambio
    console.log('url actual:', window.location.pathname);
    setRutaActual(window.location.pathname);
  },[])

  return (
    <>
      <div className="contenedor">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/registro">Registro</a>
            </li>
          </ul>
        </nav>
        <div className="contenedor-rutas">
          {rutaActual === '/' && <Home />}
          {rutaActual === '/login' && <Login />}
          {rutaActual === '/registro' && <h1>Registro</h1>}
        </div>
      </div>
    </>
  )
}

export default App
