// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


var difficolta;
var max;
var bombe = 16;
var lastChance = 0;
var trovato = false;

while (difficolta != 1 && difficolta != 2 && difficolta != 3 && lastChance != 3) {
    difficolta = parseInt(prompt("scegli da difficoltà 1 - 2 - 3"));
    if (difficolta == 1 || difficolta == 2 || difficolta == 3){
        switch (difficolta) {
            case 1:
            max = 100;
                break;
            case 2:
            max = 80;
                break;
            case 3:
            max = 50;
                break;
        }
    } else if (lastChance==1) {
        alert("ultima chance, 1, 2 o 3 non è difficile!");
        lastChance++;
    } else if (lastChance==2) {
        alert("ti avevo avvisato");
        lastChance++;
        trovato=true;
        bombe=0;

    } else {
        alert("Te lo ripeto, devi mettere un numero tra 1, 2 o 3");
        lastChance++;
    }
}

var numbers = [];
var numbersN;

while (numbers.length < bombe) {
    numbersN = getRandom(max);
    if (!controllo (numbersN, numbers)){
        numbers.push(numbersN);
    }
}

var arrayUtente = [];
var numeroUtente;


while (arrayUtente.length < max - bombe && trovato == false){
    numeroUtente = parseInt(prompt("inserisci un numero da 1 a " + max ));

    while (numeroUtente <= 0 || numeroUtente > max){
        numeroUtente = parseInt(prompt("Hai inserito un numero non valido, inserisci un numero da 1 a " + max ));
    }
    if (controllo(numeroUtente, numbers)) {
        trovato = true;
    }else if (!controllo(numeroUtente, arrayUtente)) {
        arrayUtente.push(numeroUtente);
    }else {
        alert("numero già inserito, mettine un altro");
    }
}

// alert("i numeri scelti dal pc sono " + numbers);


if (trovato && lastChance!=3) {
    alert("l'ultimo numero da te inserito è " + numeroUtente)
    alert("tutti i numeri inseriti da te che non erano bombe sono " + arrayUtente);
    alert("Hai perso con " + arrayUtente.length + " tentativi andati bene");
} else if (trovato){
    alert("Hai perso");
} else {
    alert ("HAI VINTO");
}



function getRandom(a) {
    return Math.floor(Math.random() * a) + 1;
}

function controllo (num, array) {
    var i = 0;
    while (i < array.length) {
        if (num == array[i]) {
            return true;
        }
        i++;
    }
    return false;
}
