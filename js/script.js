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

  // INSERISCO IN HTML questi tag per la card che apparirà in seguito a Invia
  document.getElementById("result").innerHTML = `
  <div class="ticket border border-3 rounded-4 p-4 bg-white shadow-sm">
    
    <!-- Titolo e numero biglietto sulla stessa riga -->
    <div class="d-flex justify-content-between align-items-start mb-3">
      <h5 class="fw-bold text-primary mb-0">🎫 Biglietto Passeggero</h5>
      <h6 class="text-primary fw-bold small mb-0">#00147-2025</h6>
    </div>

    <!-- Contenuto della card -->
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end">
      <div class="col-left text-start pe-md-4 small lh-sm">
        <p class="mb-1"><strong>Nome:</strong> ${passengerName}</p>
        <p class="mb-1"><strong>Cognome:</strong> ${passengerSurname}</p>
        <p class="mb-1"><strong>Carrozza:</strong> 5</p>
        <p class="mb-1"><strong>Posto:</strong> 12B</p>
      </div>
      <div class="col-right mt-4 mt-md-0">
        <div class="d-flex flex-column flex-sm-row align-items-end justify-content-end gap-3">
          <div class="text-sm-end text-start small lh-sm">
            <p class="mb-1"><strong>KM:</strong> ${passengerKm}</p>
            <p class="mb-1"><strong>Prezzo:</strong> € ${finalCost.toFixed(
              2
            )}</p>
            <p class="mb-1"><strong>Partenza:</strong> 14:45</p>
            <p class="mb-1"><strong>Arrivo:</strong> 16:32</p>
          </div>
<img src="./img/fake_qr.png" alt="QR code finto" class="mb-1 rounded" style="width: 100px; height: 100px; object-fit: contain; border: 3px solid #000;">
        </div>
      </div>
    </div>

    <hr>
    <div class="text-center text-muted fst-italic small">
      Grazie per aver viaggiato con Boolean Railways 🚄
    </div>
  </div>
`;
});
