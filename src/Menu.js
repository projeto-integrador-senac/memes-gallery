const Menu = (props) => {

 const quantidade_jogos = props.quantidade_jogos

    require("./Menu.css");
    
    return(
        
        <div className="menu">

                 <div>
                    <input type="checkbox" id="check"/>
                    <label for="check" id="icone"><i class="fa-solid fa-bars"></i></label>
                    <div class="barra">	
                        <nav>
                            <a href=""><div class="link">Top Memes</div></a>
                            <a href=""><div class="link">Museu do Memes</div></a>
                            <a href=""><div class="link">Criadores</div></a>
                        </nav>	
                    </div>
                 </div>
    
          <div className="img">
          <a href="#">
            
          </a>
          </div>
      
         

          <div>

            <a href="#"> Cadastro </a>

            <a href="#"> Login </a>

            <a href="#">
             <strong>{quantidade_jogos}</strong>
            </a>
            
            <a href="#"> <i class="fa-solid fa-magnifying-glass"></i></a>
          </div>  
          
        </div>
        
    );
}

export default Menu;