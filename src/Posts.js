
export default function Posts(){

  let dados = [
    {fotoUsuario:"./img/meowed.svg",
      nomeUsuario:"meowed",
      imagem:"./img/gato-telefone.svg",
      fotoCurtidas:"./img/respondeai.svg",
      nomeCurtidas:"respondeai",
      numeroDeCurtidas:"101.523"},

      {fotoUsuario:"./img/barked.svg",
        nomeUsuario:"barked",
        imagem:"./img/dog.svg",
        fotoCurtidas:"./img/adorable_animals.svg",
        nomeCurtidas:"adorable_animals",
        numeroDeCurtidas:"99.159"}
  ]

    return(
      <div class="posts">
        {dados.map(d => <Post fotoUsuario={d.fotoUsuario} nomeUsuario={d.nomeUsuario} imagem={d.imagem} fotoCurtidas={d.fotoCurtidas} nomeCurtidas={d.nomeCurtidas} numeroDeCurtidas={d.numeroDeCurtidas} />)}
      </div>
    )
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
              <img src={props.imagem} />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.fotoCurtidas} />
                <div class="texto">
                  Curtido por <strong>{props.nomeCurtidas}</strong> e <strong>outras {props.numeroDeCurtidas} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
  )
}

