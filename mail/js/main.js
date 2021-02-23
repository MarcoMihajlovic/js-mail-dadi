var emailControllo = ["hercule.poirot@orient-express.net", "jules.maigret@pietr-le-letton.net", "sherlock.holmes@baker-street.net", "nero.wolfe@brownstone.net", "rocco.schiavone@capodanno-in-giallo.net"]
var success = 0;

document.getElementById("invio").addEventListener("click", function() {
    var emailUtente = document.getElementById("email").value;

    for (var i=0; i<5; i++) {
        if (emailControllo [i] == emailUtente) {
            alert("Accesso Effettuato");
            success = 1;
        }
    }

    if (success == 0) {
        alert("Accesso Negato, la mail inserita non è nel database");
    }
})