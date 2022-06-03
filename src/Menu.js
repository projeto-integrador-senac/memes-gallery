import React from 'react';
import { Link } from "react-router-dom";


const Menu = () => {

 

    require("./Menu.css");
    
    return(
        <div>
        <div className="menu">

                 <div>
                    <input type="checkbox" id="check"/>
                    <label for="check" id="icone"><i class="fa-solid fa-bars"></i></label>
                    <div class="barra">	
                        <nav>
                            <a href=""><div class="link">Top Memes</div></a>
                            <a href=""><div class="link">Museu de Memes</div></a>
                            <a href=""><div class="link">Criadores</div></a>
                        </nav>	
                    </div>
                 </div>
    
          <div className="img">
          <a href="#">
            
          </a>
          </div>
      
         

          <div className="as">
            <a href="#"> <i class="fa-solid fa-magnifying-glass"></i></a>

            <a href="#"> Cadastro </a>

            <a href="#"> Login </a>            
          </div>  
          
        </div>
        <div className="PC">
            <Link to="/"> Inicio </Link>
            <a href="#"> Top Memes </a>
            <a href="#"> Museu de Memes </a>
            <a href="#"> Criadores </a>

            <a href="#"> <i class="fa-solid fa-magnifying-glass"></i></a>

            

            <Link to="/Login"> Login </Link>

            <Link to="/Cadastro"> Cadastro </Link>          
        </div>
    </div>    
        
    );
}

export default Menu;