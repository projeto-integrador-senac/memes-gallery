
import Menu from "./Menu.js";
import { useState } from "react";

const Cadastro = () => {

  require("./Formulario.css");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  
    return (
     <div>
         <Menu/>

         <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Cadastre-se </span>

           <br></br>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Seu melhor email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={user !== "" ? "has-val input" : "input"}
                type="email"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Um nome de Usuario"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Confirme sua senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Já possui uma conta? </span>
              <a className="txt2" href="#">
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
     </div>
    );
  }
  
  export default Cadastro;