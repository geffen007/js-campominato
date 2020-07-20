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
var difficolta = parseInt(prompt("scegli da difficoltà 1 - 2 - 3"));

var max
if (difficolta == 1) {
    max = 100;
} else if (difficolta == 2) {
    max = 80;
} else {
    max = 50;
}



var numbers = [];
var numbersN;

for (var i = 0; i < 16 ; i++) {
    numbersN = getRandom(max);
    if (controllo(numbersN, numbers)) {
        numbers.push(numbersN);
    } else {
        numbersN = getRandom(max);
        i--;
    }
}

console.log(numbers);

var arrayUtente = [];
var punteggio = arrayUtente.length;
var numeroUtente;


while ((punteggio < (max-16)) && controllo(numeroUtente, numbers)) {
    numeroUtente = parseInt(prompt("inserisci un numero da 1 a " + max ));
    if (controllo(numeroUtente, arrayUtente)) {
        arrayUtente.push(numeroUtente);
    }else {
        numeroUtente=parseInt(prompt("numero già inserito"))
    }
}


console.log(arrayUtente);
console.log(punteggio);








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
