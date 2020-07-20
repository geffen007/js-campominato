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

while (difficolta != 1 && difficolta != 2 && difficolta != 3) {
    difficolta = parseInt(prompt("scegli da difficoltà 1 - 2 - 3"));
    if (difficolta == 1) {
        max = 100;
    } else if (difficolta == 2) {
        max = 80;
    } else if (difficolta == 3) {
        max = 50;
    } else {
        alert("perchè devi farmi arrabiare");
    }
}

// inzializziamo un array vuoto e una variabile che andra a formare l'array di volta in volta
var numbers = [];
var numbersN;

for (var i = 0; i < 16 ; i++) {
    numbersN = getRandom(max);
    // se la funzione controllo restituisce true il numero generato andrà a far parte dell'array
    if (controllo(numbersN, numbers)) {
        numbers.push(numbersN);
    } else { //altrimenti il numero verrà sovrascritto da un altro numero random e il contatore tornerà indietro di 1
        numbersN = getRandom(max);
        i--;
    }
}

console.log("i numeri scelti dal pc sono " + numbers); //stampiamo i numeri del pc

// iniziamo un array vuoto per i numeri inseriti dal giocatore
var arrayUtente = [];
var numeroUtente;

// stavolta usiamo il while e non il for, visto che il ciclo potrebbe interrompersi prima
while ((arrayUtente.length < (max-16)) && controllo(numeroUtente, numbers)) {
    numeroUtente = parseInt(prompt("inserisci un numero da 1 a " + max ));
    if (controllo(numeroUtente, arrayUtente)) {
        arrayUtente.push(numeroUtente);
        console.log("i tuoi numero sono i seguenti " + arrayUtente);
    }else {
        numeroUtente=parseInt(prompt("numero già inserito"));
    }
}

var punteggio = arrayUtente.length - 1; 

console.log("i tuoi numero sono i seguenti " + arrayUtente);
console.log("il tuo punteggio è di " + punteggio);

if (punteggio > max - 48) {
    console.log("sei uno sfigato");
} else if (punteggio > max - 40) {
    console.log("non sei andato poi cosi male, ma potevi fare di meglio");
} else if ( punteggio > max-25) {
    console.log("eri a metà strada");
} else if (punteggio > max -15) {
    console.log("mancava poco");
} else if (punteggio > max - 5) {
    console.log("per un pelo");
}



function getRandom(a) {
    number = Math.floor(Math.random() * a) + 1;
    return number;
}

function controllo(num, array) {
    control = true;
    for (var i = 0; i < array.length; i++) {
        if (num == array[i]) {
            control = false;
        }
    }
    return control;
}
