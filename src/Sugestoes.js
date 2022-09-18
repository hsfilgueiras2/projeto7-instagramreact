export default function Sugestoes(){
    const sugestoes = [
        {img:"assets/img/bad.vibes.memes.svg",name:"bad.vibes.memes",reason:"Segue você"},
        {img:"assets/img/chibirdart.svg",name:"chibirdart",reason:"Segue você"},
        {img:"assets/img/razoesparaacreditar.svg",name:"razoesparaacreditar",reason:"Novo no Instagram"},
        {img:"assets/img/adorable_animals.svg",name:"adorable_animals",reason:"Segue você"},
        {img:"assets/img/smallcutecats.svg",name:"smallcutecats",reason:"Segue você"}
    ]  
    return(
        <div class="sugestoes">
            <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
            </div>
            {
                sugestoes.map((item)=>
                <div class="sugestao">
                <div class="usuario">
                    <img src={item.img} />
                    <div class="texto">
                    <div class="nome">{item.name}</div>
                    <div class="razao">{item.reason}</div>
                    </div>
                </div>
    
                <div class="seguir">Seguir</div>
                </div>
                )
            }
        </div>
    );
}
