import React from 'react';

import Inicio from './Inicio.js';
import Cadastro from './Cadastro.js';
import Menu from './Menu.js';
import Formulario from './Formulario.js';


const App = () => {

  require("./App.css");

  const [tela, mudaTela] = React.useState(0);

  return (
   <div>

   
      <Menu/>
      <Formulario/>


      
   </div> 
  );
}

export default App;
