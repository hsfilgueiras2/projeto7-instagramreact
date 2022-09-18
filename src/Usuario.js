import React from 'react';
export default function(){
    const [profilePic, setprofilePic] = React.useState("assets/img/catanacomics.svg");
    const [user, setUser] = React.useState("Catana");
    const [displayName, setDisplayName] = React.useState("catanacomis");

    return(
        <div class="usuario">
            <img onClick = {()=>setprofilePic(prompt("Insira o url da imagem nova: "))}src={profilePic} />
            <div class="texto">
                <strong>{displayName}
                <ion-icon onClick={() => setDisplayName(prompt("Digite o seu novo displayname: "))}  name="pencil"></ion-icon>
                </strong>
                <span>
                    {user}
                    <ion-icon onClick={() => setUser(prompt("Digite o seu novo username: "))} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}


