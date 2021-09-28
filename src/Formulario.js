import { Component } from "react";
import './css/formulario.css'




class Formulario  extends  Component{
    
    render(){
        
            
        
        return(
          <>
                <ul class="nav nav-pills">
  <li class="nav-item">
  <a class="btn btn-primary btn-lg" href="/"><strong>Inicio</strong></a>
  </li>
  <li class="nav-item">
  <a class="btn btn-primary btn-lg" href="Formulario"><strong>Formulario</strong></a>
  </li>
  <li class="nav-item">
  <a class="btn btn-primary btn-lg" href="Footer"><strong>Footer</strong></a>
  </li>
  <li class="nav-item">
  <a class="btn btn-primary btn-lg" href="Historia"><strong>Historia</strong></a>
  </li>
  
  
</ul>

            <div className="formulario">
            <div class="login-page">
            <div class="form">
              <form class="register-form">
                <input type="text" placeholder="nombre"/>
                <input type="gmail" placeholder="correo"/>
                <input type="password" placeholder="password"/>
                <input type="text" placeholder="email address"/>
                <button>create</button>
                <p class="message">Already registered? <a href="#">Sign In</a></p>
              </form>
              <form class="login-form">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Last name "/>
                <input type="Gmail" placeholder="Email "/>
                <button>Contactar</button>
                <p class="message"> Leer terminos y condiciones  <a href="#">Leer</a></p>
              </form>
            </div>
          </div>
          </div>
          </>
        )
    }

}
export default Formulario;