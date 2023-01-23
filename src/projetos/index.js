import React from "react";
import './index.css';

function SecaoProjetos(props){
  const projetos = props.projetos.map(projeto => (
    <div class="card-projeto">
      <h3>{projeto.nome}</h3>
      
      <a href={projeto.url}>
        <img src={projeto.imagem}></img>
      </a>
      <p>{projeto.descricao}</p>
    </div>
  ));
  return(
    <>
      <div class="secao-projetos">
        <h2>Projetos</h2>  
        <li className="projetos">
          {projetos}
        </li>
      </div>
    </>
  )
}

export default SecaoProjetos;