import react from "react"


export default function Posts(){


  let dados = [
    {fotoUsuario:"./img/meowed.svg",
      nomeUsuario:"meowed",
      imagem:"./img/gato-telefone.svg",
      fotoCurtidas:"./img/respondeai.svg",
      nomeCurtidas:"respondeai",
      numeroDeCurtidas:101523,
      coraçao:"coraçao 1",
      marcador:"marcador 1"},

      {fotoUsuario:"./img/barked.svg",
        nomeUsuario:"barked",
        imagem:"./img/dog.svg",
        fotoCurtidas:"./img/adorable_animals.svg",
        nomeCurtidas:"adorable_animals",
        numeroDeCurtidas:99159,
        coraçao:"coraçao 2",
        marcador:"marcador 2"}
  ]

  function darLike(id, x) {
    const coraçao = document.getElementById(id);
    const curtidas = coraçao.parentNode.parentNode.parentNode.children[1].children[1].children[1].children[0];

  
    if(coraçao.name === "heart-outline"){
      coraçao.name = "heart";
      coraçao.classList.add('vermelho');
      curtidas.textContent++

    }else if(x !== undefined){
      return
    }
    else{
      coraçao.name = "heart-outline";
      coraçao.classList.remove('vermelho');
      curtidas.textContent--
    }
  }
  
  function salvar(id){
    const marcador= document.getElementById(id);

    if(marcador.name === "bookmark-outline"){
      marcador.name = "bookmark";
    }
    
    else{
      marcador.name = "bookmark-outline";
    }
  }


  function Post(props){
    return(
      <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.fotoUsuario} />
                  {props.nomeUsuario}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>
  
              <div class="conteudo">
                <img src={props.imagem} onClick={() => darLike(props.coraçao, 1)}/>
              </div>
  
              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon id={props.coraçao} class="coraçao" name="heart-outline" onClick={() => darLike(props.coraçao)} ></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon id={props.marcador} class="marcador" name="bookmark-outline" onClick={() => salvar(props.marcador)}></ion-icon>
                  </div>
                </div>
  
                <div class="curtidas">
                  <img src={props.fotoCurtidas} />
                  <div class="texto">
                    Curtido por <strong>{props.nomeCurtidas}</strong> e <strong>outras <span>{props.numeroDeCurtidas}</span> pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    )
  }


    return(
      <div class="posts">
        {dados.map(d => <Post fotoUsuario={d.fotoUsuario} nomeUsuario={d.nomeUsuario} imagem={d.imagem} fotoCurtidas={d.fotoCurtidas} nomeCurtidas={d.nomeCurtidas} numeroDeCurtidas={d.numeroDeCurtidas} coraçao={d.coraçao} marcador={d.marcador} />)}
      </div>
    )
}




