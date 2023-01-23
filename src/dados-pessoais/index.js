import React from "react";
import foto from "../assets/img/foto.jpg";
import './index.css';
function DadosPessoais(props){
  return(
    <React.Fragment>
    <div className="dados-pessoais">
      <img src={foto}></img>
      <div className="info">
        <h3>Itanildo Augusto Sinnésio Dantas</h3>
        <p>Natal - RN</p>
        <p>IMD - UFRN</p>
      </div>
    </div>
  </React.Fragment>
  )
}

export default DadosPessoais;