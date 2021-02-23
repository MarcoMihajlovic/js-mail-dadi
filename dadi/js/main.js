var partita = true;
while (partita) {
    alert("Giocherai ai dadi contro il PC");

    var player = Math.floor(Math.random()*6) + 1;
    alert("Hai tirato " + player);

    var com = Math.floor(Math.random()*6) + 1;
    alert("Il computer ha tirato " + com);

    if (player > com) {
        alert("Il tuo " + player + " batte il " + com + " tirato dal computer, HAI VINTO");
    } else if (player < com) {
        alert("Il " + com + " tirato dal computer batte il tuo " + player + ", HAI PERSO");
    } else {
        alert("il tuo dado e quello del computer hanno lo stesso valore: " + com + ", quindi PAREGGIO");
    }

    var sentinella = true;
    while(sentinella) {
        var opzione = prompt("Vuoi fare un'altra partita? Y/N");

        if ((opzione == "y") || (opzione == "n") || (opzione == "Y") || (opzione == "N")) {
            sentinella = false;
        } else {
            alert("Devi inserire una risposta corretta");
        }
    }

    if ((opzione == "n") || (opzione == "N")) {
        partita = false;
    }
}