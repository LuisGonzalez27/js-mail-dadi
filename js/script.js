
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

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
const lancia = document.getElementById('btn_lancia');

lancia.addEventListener('click',
function(){
    // Genera un numero random per l'utente
    let numUser = Math.floor(Math.random() * 6) + 1;
    document.getElementById("user").innerHTML = "Il numero generato per l'utente è: " + numUser;

    //Genera un numero random per il computer
    let numComputer = Math.floor(Math.random() * 6) + 1;
    document.getElementById("computer").innerHTML = "Il numero generato per il computer è: " + numComputer;

    // Confronta i due numeri e stabilisci il punteggio più alto quindi il vincitore
    if (numUser > numComputer) {
        console.log("L'utente vince");
        document.getElementById("winner").innerHTML = "Il vincitore è l'utente!";
    } else if (numUser < numComputer) {
        console.log("il computer vince");
        document.getElementById("winner").innerHTML = "Il vincitore è il computer!";
    } else {
        console.log("Pareggio");
        document.getElementById("winner").innerHTML = "Pareggio!";
    }
}
)