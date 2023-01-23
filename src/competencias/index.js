import React from "react";
import './index.css';
function Competencias(props){
  const lista = props.lista.map(competencia => (
    <li key={competencia.nome}><b>{competencia.nome}</b> - {competencia.descricao}</li>
  ));
  return (
    <React.Fragment>
    {lista}
    </React.Fragment>
  );
}

function SecaoCompetencias(props){
  const grupoCompetencia = props.gruposCompetencia.map(grupo => (
    <React.Fragment>
      <ul>{grupo.nome}</ul>
      <Competencias lista={grupo.competencias}/>
    </React.Fragment>
  ));
  return(
    <div class="competencias">
    {grupoCompetencia}
    </div>
  )
}

export default SecaoCompetencias;