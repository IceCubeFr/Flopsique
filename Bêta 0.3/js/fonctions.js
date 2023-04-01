//------------------------------------------------------------------ Thèmes

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

//------------------------------------------------------------------ Gestion de la musique

let audio = new Audio();

function lancer() {
    var categorie = document.getElementById("choixCategorie");
    var boutonjouer = document.getElementById("boutonPlay");
    var boutonstop = document.getElementById("boutonPause");
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
    barreProgression();
    boutonjouer.style.display = "none";
    boutonstop.style.display = "block";
    if (audio.src == "") {
        boutonstop.style.display = "none";
        boutonjouer.style.display = "block";
    }
    audio.play();
}
function stop() {
    var boutonjouer = document.getElementById("boutonPlay");
    var boutonstop = document.getElementById("boutonPause");
    boutonstop.style.display = "none";
    boutonjouer.style.display = "block";
    audio.pause();
}

function volume() {
    var volume = document.getElementById("volume");
    audio.volume = volume.value / 100;
}

//------------------------------------------------------------------ Changement catégories

function changementCategorie() {
    var categorie = document.getElementById("choixCategorie");
    var wii = document.getElementById("wii");
    var lol = document.getElementById("lol");
    var rapfr = document.getElementById("rapFr");
    imagesCategories()
    if (categorie.value == "wii") {
        wii.style.display = "block";
        wii.style.animation = "fade-in 2s forwards";
        lol.style.display = "none";
        rapfr.style.display = "none";
    }
    else if (categorie.value == "lol") {
        lol.style.display = "block";
        lol.style.animation = "fade-in 2s forwards";
        wii.style.display = "none";
        rapfr.style.display = "none";
    }
    else if (categorie.value == "rapFr") {
        rapfr.style.display = "block";
        rapfr.style.animation = "fade-in 2s forwards";
        wii.style.display = "none";
        lol.style.display = "none";
    }
    else if (categorie.value == "-") {
        rapfr.style.display = "none";
        lol.style.display = "none";
        wii.style.display = "none";
    }
}

//------------------------------------------------------------------ Changement images catégories

function imagesCategories() {
    var categorie = document.getElementById("choixCategorie");
    var imgwii = document.getElementById("imageWii");
    var imglol = document.getElementById("imageLol");
    var imggims = document.getElementById("imageGims");
    if (categorie.value == "wii") {
        imgwii.style.display = "block";
        imgwii.style.animation = "fade-in 2s forwards";
        imglol.style.display = "none";
        imggims.style.display = "none";
    }
    else if (categorie.value == "lol") {
        imgwii.style.display = "none";
        imggims.style.display = "none";
        imglol.style.display = "block";
        imglol.style.animation = "fade-in 2s forwards";
    }
    else if (categorie.value == "rapFr") {
        imgwii.style.display = "none";
        imglol.style.display = "none";
        imggims.style.display = "block";
        imggims.style.animation = "fade-in 2s forwards";
    }
    else if (categorie.value == "-") {
        imgwii.style.display = "none";
        imglol.style.display = "none";
        imggims.style.display = "none";
    }
}

//------------------------------------------------------------------ ProgressBar Musique

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
function barreProgression() {
    const progressBar = document.querySelector('.progress');
    const currentTimeElement = document.querySelector('.current-time');
    const durationElement = document.querySelector('.duration');

    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;

        if (duration > 0) {
            const progress = (currentTime / duration) * 100;
            progressBar.style.width = progress + '%';
        }
        if (currentTime == duration) {
            lancer()
        }
    });

    audio.addEventListener('loadedmetadata', () => {
        durationElement.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
        currentTimeElement.textContent = formatTime(audio.currentTime);
    });
}