import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import pintoraIMG from "./pintora.svg";


const Login = () => {

    require('./Login.css')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  
    return (
      <div>
        
      <div className="container">
      <div className="container-login">
        <div className="wrap-login">
        <span className="imagem">
          <p>ENTRE E FAÇA MAIS "MEMES" MAIS OBRAS DE ARTE</p>
             <img className="fdss" src={pintoraIMG} />
          </span> 
          <form className="login-form">
            <span className="login-form-title"> Bem vindo </span>

           <br></br>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email ou User"></span>
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

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <Link to="/Cadastro" className="txt2" href="#">
                Criar conta
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    );
  }
  
  export default Login;