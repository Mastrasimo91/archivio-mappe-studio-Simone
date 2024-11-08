// Array per salvare le mappe concettuali
let mappeConcettuali = [];

// Funzione per aggiungere una nuova mappa
function aggiungiMappa() {
    // Prendi i valori dai campi di input
    const titolo = document.getElementById("titolo-mappa").value;
    const descrizione = document.getElementById("descrizione-mappa").value;

    // Controlla che il titolo non sia vuoto
    if (!titolo) {
        alert("Il titolo della mappa è obbligatorio.");
        return;
    }

    // Crea un oggetto per la mappa e aggiungilo all'array
    const nuovaMappa = { titolo, descrizione };
    mappeConcettuali.push(nuovaMappa);

    // Aggiorna la visualizzazione delle mappe
    mostraMappe();

    // Pulisci i campi di input
    document.getElementById("titolo-mappa").value = "";
    document.getElementById("descrizione-mappa").value = "";
}

// Funzione per mostrare le mappe concettuali nel contenitore
function mostraMappe() {
    const mappeContainer = document.getElementById("mappe-container");
    mappeContainer.innerHTML = "";  // Svuota il contenitore

    // Aggiungi ogni mappa nell'array al contenitore
    mappeConcettuali.forEach((mappa, index) => {
        const mappaDiv = document.createElement("div");
        mappaDiv.id = "mappa-item";
        mappaDiv.innerHTML = `
            <h3>${mappa.titolo}</h3>
            <p>${mappa.descrizione}</p>
            <button onclick="rimuoviMappa(${index})">Rimuovi</button>
        `;
        mappeContainer.appendChild(mappaDiv);
    });
}

// Funzione per rimuovere una mappa
function rimuoviMappa(index) {
    mappeConcettuali.splice(index, 1);
    mostraMappe();
}
