// 1 L’utente sceglie pari o dispari
var sceltaPariDispari = prompt("Scrivi pari o dispari");
console.log(sceltaPariDispari);

// 2 L’utente inserisce un numero da 1 a 5.
var sceltaNumero = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(sceltaNumero);

// 3 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function generaNumero(min, max){
  var random = Math.floor(Math.random() * 5) + 1;
  return random;
}

for (var i = 1; i <= 1; i++) {
  var numero = generaNumero(1, 5);
  console.log(numero);
}

// 4 Sommiamo i due numeri
var somma = sceltaNumero + numero;
console.log(somma);

// 5 Stabiliamo se la somma dei due numeri è pari o dispari
function checkPariDispari(somma)
{
  if (somma % 2 == 0);
  {
  return 'è pari';
  }
  return 'è dispari';
}


// 6 Dichiariamo chi ha vinto.
if (somma == 'è pari') {
console.log("Hai vinto");
}else {
  (somma == 'è dispari')
{
  console.log("Ha vinto il computer");
}
}
