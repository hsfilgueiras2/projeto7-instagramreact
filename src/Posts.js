
import React from "react";
export default function Posts(){
    const posts = [{user:"meowed",img:"assets/img/gato-telefone.svg", curtidas:101.523, ultimaCurtida:"respondeai"},
    {user:"barked",img:"assets/img/dog.svg", curtidas:99.159, ultimaCurtida:"adorable_animals" }]
    const handleClick = (e) => {
        const attr = e.target.getAttribute("name");
        // Check for attributes
        if (!attr) {
          return;
        }
        // Switch status
        const changeAttr = attr == "bookmark-outline" ? "bookmark" : "bookmark-outline";
        // Set result back
        e.target.setAttribute("name", changeAttr);
      };

      const handleClick2 = (e) => {
        const attr = e.target.getAttribute("name");
        // Check for attributes
        if (!attr) {
          return;
        }
        // Switch status

        const changeAttr = attr == "heart-outline" ? "heart" : "heart-outline";
        if (changeAttr == "heart"){
            e.target.setAttribute("class","vermelho")
        }
        else{
            e.target.setAttribute("class", "")
        }
        // Set result back
        e.target.setAttribute("name", changeAttr);
      };
    return(
        <div class="posts">
            {
                posts.map((item)=>
                <div class="post">
                <div class="topo">
                    <div class="usuario">
                    <img src="assets/img/meowed.svg" />
                    {item.user}
                    </div>
                    <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <div data-arrayPos={posts.indexOf(item)}>
                <div class="conteudo">
                    <img src={item.img} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                    <div>
                        <ion-icon onClick={handleClick2} name={"heart-outline"}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={handleClick}name="bookmark-outline"></ion-icon>
                    </div>
                    </div>

                    <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>{item.ultimaCurtida}</strong> e <strong>outras {item.curtidas} pessoas</strong>
                    </div>
                    </div>
                </div>
                </div>
            </div>
                )
            }

        </div>
    );
}

