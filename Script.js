// Array per salvare le mappe concettuali
let mappeConcettuali = [];

// Funzione per aggiungere una nuova mappa
function aggiungiMappa() {
    // Prendi i valori dai campi di input
    const titolo = document.getElementById("titolo-mappa").value;
    const descrizione = document.getElementById("descrizione-mappa").value;
    const fileInput = document.getElementById("file-mappa");
    const file = fileInput.files[0];

    // Controlla che il titolo e il file non siano vuoti
    if (!titolo || !file) {
        alert("Titolo e file sono obbligatori.");
        return;
    }

    // Crea un oggetto per la mappa e aggiungilo all'array
    const nuovaMappa = { titolo, descrizione, file };
    mappeConcettuali.push(nuovaMappa);

    // Aggiorna la visualizzazione delle mappe
    mostraMappe();

    // Pulisci i campi di input
    document.getElementById("titolo-mappa").value = "";
    document.getElementById("descrizione-mappa").value = "";
    document.getElementById("file-mappa").value = "";
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

        // Se il file è un'immagine, mostra un'anteprima
        const reader = new FileReader();
        reader.onload = function(event) {
            const fileType = mappa.file.type;
            if (fileType.startsWith('image/')) {
                const img = document.createElement("img");
                img.src = event.target.result;
                mappaDiv.appendChild(img);
            } else if (fileType === 'application/pdf') {
                const link = document.createElement("a");
                link.href = event.target.result;
                link.textContent = "Visualizza PDF";
                link.target = "_blank";
                mappaDiv.appendChild(link);
            }
        };
        reader.readAsDataURL(mappa.file);

        mappeContainer.appendChild(mappaDiv);
    });
}

// Funzione per rimuovere una mappa
function rimuoviMappa(index) {
    mappeConcettuali.splice(index, 1);
    mostraMappe();
}
