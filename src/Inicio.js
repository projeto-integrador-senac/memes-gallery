import React from 'react';

import Menu from "./Menu.js";
import Vitrine from "./Vitrine.js";
import Produtos from "./Produtos.js";
import Rodape from './Rodape.js';

require("./App.css");
require("./Menu.css");
require("./Vitrine.css");
require("./Produtos.css");
require("./Rodape.css");

const Inicio = () =>{

    const [quantidade_jogos, adicionaJogo] = React.useState(0);

    return(
        <div>

    <div className='nao'>
    <p>Jogos Adicionados: <strong> {quantidade_jogos} </strong></p>
    <button onClick={() => adicionaJogo(quantidade_jogos + 1)}>Adicionar Jogo</button>
    </div>
    <Vitrine/>

    <div className="container">
        <Produtos adicionaJogo = {adicionaJogo} quantidade_jogos= {quantidade_jogos}/>
        
    </div>
    <Rodape/>
   </div> 
    );
}
export default Inicio;