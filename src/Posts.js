
import React from "react";
export default function Posts(){
    const posts = [{user:"meowed",img:"assets/img/gato-telefone.svg", curtidas:101.523, ultimaCurtida:"respondeai",state:"heart-outline"},
    {user:"barked",img:"assets/img/dog.svg", curtidas:99.159, ultimaCurtida:"adorable_animals",state:"heart-outline" }]
    const handleClick = (e) => {
        const attr = e.target.getAttribute("name");
        if (!attr) {
          return;
        }
        const changeAttr = attr == "bookmark-outline" ? "bookmark" : "bookmark-outline";
        e.target.setAttribute("name", changeAttr);
      };

      const handleClick2 = (e) => {

        const attr = e.target.getAttribute("data-arrayPos");
        console.log("attr:"+attr);
        const targetDiv = document.querySelector(`.like${attr}`);
        const likeIcon = targetDiv.querySelector("ion-icon");
        const check = posts[attr].state;
        const texto = targetDiv.querySelector(".texto")
        const changeAttr = check == "heart-outline" ? "heart" : "heart-outline";
        console.log(targetDiv.classList)
        if (changeAttr == "heart"){
            likeIcon.setAttribute("class","vermelho")
            posts[attr].curtidas ++;
        }
        else{
            likeIcon.setAttribute("class", "")
            posts[attr].curtidas --;
        }
        posts[attr].state=changeAttr;
        likeIcon.setAttribute("name",posts[attr].state)
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
                <div class={`like`+posts.indexOf(item)}>
                <div data-arrayPos={posts.indexOf(item)} onClick={handleClick2} class="conteudo">
                    <img data-arrayPos={posts.indexOf(item)} src={item.img} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                    <div>
                        <ion-icon data-findLike={posts.indexOf(item)} data-arrayPos={posts.indexOf(item)} onClick={handleClick2} name={item.state}></ion-icon>
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

