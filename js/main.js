// creare una versione dell'ex del biglietto del treno
// usare eventi su due bottoni principali
// Genera calcolerà il prezzo del biglietto a partire dai dati inseriti negli input e mi darà l'output in pagina, nel modo migliore possibile
// annulla mi fa tornare allo stato iniziale con output pulito o nascosto e campi puliti.


// button cerca
var buttonCalcola = document.getElementById('calcola');
// click sul button cerca
buttonCalcola.addEventListener("click",
  function(){
    // salvo i dati input al click

    // nome
    var nomePasseggero = document.getElementById('nome');
    var nome = nomePasseggero.value;

    // km
    var kmPasseggero = document.getElementById('km');
    var km = kmPasseggero.value;
    console.log(km);

    // sconto
    var scontoPasseggero = document.getElementById('sconto');
    var sconto = scontoPasseggero.value;
    console.log(sconto);

    // calcolo il prezzo del biglietto intero
    var standard = 0.21 * km;
    var prezzo = standard.toFixed(2);
    console.log(prezzo);
    offerta = 'Standard';

    // calcolo sconto under18
    if (sconto == 'under18') {
      var scontoUnder18 = ((20 * standard) /100);
      var under18 = standard - scontoUnder18;

      prezzo = under18.toFixed(2);
      console.log(prezzo);
      offerta ='Under 18';

      // calcolo sconto over65
    }else if (sconto == 'over65') {
      var scontoOver65 = ((40 * standard) /100);
      var over65 = standard - scontoOver65;

      prezzo = over65.toFixed(2);
      console.log(prezzo);
      offerta = 'Over 65';

    }
    // calcolo n°carrozza e n°cp
    var carrozza = Math.floor(Math.random() * 10)+1;
    var cp = Math.floor(Math.random() * (9900 - 5000)) + 5000;
    // output biglietto
    document.getElementById('nomepass').innerHTML= nome;
    document.getElementById('offerta').innerHTML= offerta;
    document.getElementById('prezzo').innerHTML= prezzo + " €";
    document.getElementById('carrozza').innerHTML= carrozza;
    document.getElementById('cp').innerHTML= cp;
  }

)

// button reset

var buttonReset = document.getElementById('reset');

// click su button RESET

buttonReset.addEventListener("click",
  function(){
    document.getElementById('nome').value= "";
    document.getElementById('km').value= "";
    document.getElementById('sconto').value= "";
    document.getElementById('nomepass').innerHTML= "";
    document.getElementById('offerta').innerHTML= "";
    document.getElementById('prezzo').innerHTML= "";
    document.getElementById('carrozza').innerHTML= "";
    document.getElementById('cp').innerHTML= "";
  }
)
