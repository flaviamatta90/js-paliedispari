// 1 Chiedere all’utente di inserire una parola
var parolaUtente = prompt("Inserisci una parola");


// 2 Creare una funzione per capire se la parola inserita è palindroma
var parola = palindroma(parolaUtente);
console.log(parola);

function palindroma() {
  var scritta = parolaUtente.split("").reverse().join("");

// se la parola scelta dall'utente è palindroma
  if (parolaUtente == scritta) {
    return parolaUtente + " è palindroma";
  }
// se la parola scelta dall'utente non è palindroma
  else {
    return parolaUtente + " non è palindroma";
  }
}
