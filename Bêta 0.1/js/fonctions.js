function theme() {
    var theme = document.getElementById("theme");
    var body = document.body;
    var musiques = document.getElementById('musiques');
    if (theme.value == 'clair'){
        body.style.backgroundColor = "white";
        body.style.color = "black";
        musiques.style.borderColor = "white";
    }
    else if (theme.value == "sombre") {
        body.style.backgroundColor = "rgb(71,71,71)";
        body.style.color = "white";
        musiques.style.borderColor = "rgb(71,71,71)";
    }
}

let audio = new Audio();

function lancer() {
    var categorie = document.getElementById("choixCategorie");
    if (categorie.value == "wii") {
        let musiqueSelect = document.getElementById("musiqueWii");
        audio.src = musiqueSelect.value;
    }
    else if (categorie.value == "lol") {
        let musiqueSelect = document.getElementById("musiqueLol");
        audio.src = musiqueSelect.value;
    }
    else if (categorie.value == "rapFr") {
        let musiqueSelect = document.getElementById("musiqueRapFr");
        audio.src = musiqueSelect.value;
    }
    audio.play();
}
function stop() {
    audio.pause();
}

function volume() {
    var volume = document.getElementById("volume");
    audio.volume = volume.value / 100;
}

function changementCategorie() {
    var categorie = document.getElementById("choixCategorie");
    var wii = document.getElementById("wii");
    var lol = document.getElementById("lol");
    var rapfr = document.getElementById("rapFr");
    var imgwii = document.getElementById("imageWii");
    var imglol = document.getElementById("imageLol");
    var imggims = document.getElementById("imageGims");
    if (categorie.value == "wii") {
        wii.style.display = "block";
        wii.style.animation = "fade-in 2s forwards";
        lol.style.display = "none";
        rapfr.style.display = "none";
        imgwii.style.display = "block";
        imgwii.style.animation = "fade-in 2s forwards";
        imglol.style.display = "none";
        imggims.style.display = "none";
    }
    else if (categorie.value == "lol") {
        lol.style.display = "block";
        lol.style.animation = "fade-in 2s forwards";
        wii.style.display = "none";
        rapfr.style.display = "none";
        imgwii.style.display = "none";
        imggims.style.display = "none";
        imglol.style.display = "block";
        imglol.style.animation = "fade-in 2s forwards";
    }
    else if (categorie.value == "rapFr") {
        rapfr.style.display = "block";
        rapfr.style.animation = "fade-in 2s forwards";
        wii.style.display = "none";
        lol.style.display = "none";
        imgwii.style.display = "none";
        imglol.style.display = "none";
        imggims.style.display = "block";
        imggims.style.animation = "fade-in 2s forwards";
    }
    else if (categorie.value == "-") {
        rapfr.style.display = "none";
        lol.style.display = "none";
        wii.style.display = "none";
        imgwii.style.display = "none";
        imglol.style.display = "none";
        imggims.style.display = "none";
    }
}