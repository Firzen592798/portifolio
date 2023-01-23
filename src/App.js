import React from "react";
import './styles.js';
import SecaoCompetencias from "./competencias";
import Globals from "./data/globals";
import DadosPessoais from "./dados-pessoais/index.js";
import { Container } from './styles';
import SecaoRedesSociais from "./redes-sociais/index.js";
import SecaoProjetos from "./projetos/index.js";

function App() {
  const gruposCompetencia = Globals.inicializarCompetencias();
  const redesSociais = Globals.inicializarRedesSociais();
  const projetos = Globals.inicializarProjetos();
  return (
    <div className="App">
      <Container>
        <aside>
        <DadosPessoais/>
        <SecaoRedesSociais redesSociais={redesSociais}/>
        </aside>
        <main>
        <SecaoCompetencias gruposCompetencia={gruposCompetencia}/>
        <SecaoProjetos projetos={projetos}/>
        </main>
      </Container>
    </div>
  );
}

export default App;
