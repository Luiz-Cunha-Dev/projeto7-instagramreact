import react from "react";
import Sugestoes from "./Sugestoes";
import React from "react";



export default function Sidebar() {


  const [usuario, setUsuario]= react.useState('catanacomics');
  const [imagem, setImagem]= react.useState('./img/catanacomics.svg');
  const [texto, setTexto]= react.useState('Catana');
 

  let dados = {imagem:imagem, usuario:usuario, texto:texto}



  function mudarNomeDeUsuarioETexto(){

    let novoNome = prompt('Qual o nome do perfil?');
    let novoTexto = prompt('Qual o seu nome?');
  
    if(novoNome === ""){
      return;
    }else{
      setUsuario(novoNome);
      setTexto(novoTexto)
    }
  }


  
  function mudarImagemDePerfil(){
  
    let novaImagem = prompt('insira o endereço da novas imagem');
  
    if(novaImagem === ""){
    return;
    }else{
      setImagem(novaImagem);
      console.log(dados)
    }
  }



  function Usuario(props){
    return(
      <div class="usuario">
      <img src={props.imagem} onClick={mudarImagemDePerfil}/>
      <div class="texto">
        <strong>{props.usuario}</strong>
        <span>
          {props.texto}
          <ion-icon name="pencil" onClick={mudarNomeDeUsuarioETexto}></ion-icon>
        </span>
      </div>
    </div>
    )
  }



  return (
      <div class="sidebar">
        <Usuario imagem={dados.imagem} usuario={dados.usuario} texto={dados.texto} />
        <Sugestoes />
        <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>

      <div class="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>
      </div>
  )
}






