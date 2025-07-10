// SVOLGIMENTO ESERCIZIO
// Dichiaro la variabile che fa riferimento a send di HTML
const button = document.getElementById("send");
// Aggiungo eventListener al click del button
button.addEventListener(`click`, function (e) {
  e.preventDefault();

  const passengerName = document.getElementById("name").value; // Recupero il valore di name, surname, age e km
  const passengerSurname = document.getElementById("surname").value;
  const passengerAge = parseInt(document.getElementById("age").value);
  const passengerKm = parseFloat(document.getElementById("km").value);
	// Dichiaro le variabili che stabiliscono prezzo * km, la formula per calcolare il cost, e la variabile che conterrà il prezzo finale
  let priceKm = 0.21;
  let cost = priceKm * passengerKm;
  let finalCost;
	// Con if eseguo la formula per applicare lo sconto in base all'età
  if (passengerAge <= 17) {
    finalCost = cost - (cost * 20) / 100;
  } else if (passengerAge >= 65) {
    finalCost = cost - (cost * 40) / 100;
  } else {
    finalCost = cost;
  }

  // INSERISCO IN HTML passengerName, passengerSurname, finalCost (fixato per il decimale)
  document.getElementById("result").innerHTML = `
    <p><strong>Nome:</strong> ${passengerName}</p>
    <p><strong>Cognome:</strong> ${passengerSurname}</p>
    <p><strong>Costo del biglietto:</strong> € ${finalCost.toFixed(2)}</p>
  `;
});

