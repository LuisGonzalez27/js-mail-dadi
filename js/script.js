
"use strict";
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const bottone = document.getElementById('btn');
const div = document.querySelector(".email_div");

bottone.addEventListener('click',
function(){
    div.innerHTML = " ";
    let emailUser = document.getElementById('userEmail').value;
    //Lista di email per il confronto
    const listaEmail = ["luigi@gmail.com","marco@gmail.com","luis@gmail.com"];
    //Controllo che sia nella lista email di chi può accedere
    let check = false;
    for(let i=0; i < listaEmail.length; i++){
        if(emailUser == listaEmail[i]){
            check = true;
        }
    }
    //Stampa un messaggio sull'esito del controllo
    if(check){
        console.log("email giusta");
        div.innerHTML += "Benvenuto";
    }
    else{
        console.log("email sbagliata");
        div.innerHTML += "Email sbagliata";
    }
    document.getElementById('userEmail').value = " ";
}
)