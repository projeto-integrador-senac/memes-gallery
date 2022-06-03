import { useState } from "react";
import { Link } from "react-router-dom";
import pintorIMG from "../pintor.svg";

const Cadastro = () => {

  require("./Cadastroo.css");
  const [nome, setNome] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  
  
    return (
     <div className="body">
         <div className="Container">
      <div className="Container-login">
        <div className="Wrap-login">
        <span className="Imagem">
          <p>CADASTRE-SE AGORA MESMO NA MAIOR COMUNIDADE DE CRIADORES DE MEMES</p>
             <img className="fds" src={pintorIMG} />
          </span> 
          <form className="Loogin-form">
        
            <span className="login-form-title"> Cadastre-se </span>

           <br></br>

            <div className="wrap-input">
              <input
                className={nome !== "" ? "has-val input" : "input"}
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <span className="Focus-input" data-placeholder="Seu nome"></span>
            </div>

            <div className="wrap-input">
              <input
                className={user !== "" ? "has-val input" : "input"}
                type="email"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <span className="Focus-input" data-placeholder="Nome de Usuario"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="Focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
              <span className="Focus-input" data-placeholder="Confirme sua senha"></span>
            </div>

            <div className="Container-login-form-btn">
              <button className="Login-form-btn">Criar Conta!</button>
            </div>

            <div className="Text-center">
              <span className="Txt1">Já possui uma conta? </span>
              <Link to="/Login" className="Txt2" href="#">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
     </div>
    );
  }
  
  export default Cadastro;