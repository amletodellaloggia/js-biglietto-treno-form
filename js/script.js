// SVOLGIMENTO ESERCIZIO

const button = document.getElementById("send");

button.addEventListener(`click`, function (e) {
  e.preventDefault();

  const passengerAge = document.getElementById(`age`).value;
  const passengerKm = document.getElementById(`km`).value;

  let priceKm = 0.21;
  let cost = priceKm * passengerKm;
  let finalCost;

  if (passengerAge <= 17) {
    finalCost = cost - (cost * 20) / 100;
  } else if (passengerAge >= 65) {
    finalCost = cost - (cost * 40) / 100;
  } else {
    finalCost = cost;
  }

  // UTILIZZO TOFIXED(2) PER MOSTRARE LA SECONDA CIFRA DOPO LA VIRGOLA DEL RISULTATO DECIMALE
  console.log("Il costo del tuo viaggio è di €", finalCost.toFixed(2));
});
