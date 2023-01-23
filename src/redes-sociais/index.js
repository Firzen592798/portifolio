import React from "react";
import foto from "../assets/img/foto.jpg";
import './index.css';
function SecaoRedesSociais(props){

  const redesSociais = props.redesSociais.map(
    redeSocial =>
      <a key={redeSocial.nome} href={redeSocial.url}> 
        <i class={redeSocial.icone}></i>
        {redeSocial.nome}
      </a>
  );

  return(
    <div className="social-media">
        {redesSociais}
    </div>
  )
}

export default SecaoRedesSociais;