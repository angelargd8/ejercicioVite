

function Login({setRutaActual}){
    
    

    return (
        <>
          <div className="formulario">
              <h1>Login</h1>
              <div className="elemento-formulario">
    
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your email.."/>
                <br></br>
                <label htmlFor="password" placeholder="Your password..">Password:</label>
                <input type="password" id="password" name="password" />
                <br></br>
                <div className="boton">
                  <button onClick={()=>{setRutaActual("/home")}}>
                    iniciar sesion
                  </button>
                </div>
                
              </div>
              
        
          </div>
        </>
      )
}
export default Login;