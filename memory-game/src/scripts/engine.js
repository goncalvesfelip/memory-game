// Lista de emojis
const emojis = [
    "🦊","🦊",
    "🐶","🐶",
    "🐺","🐺",
    "🐱","🐱",
    "🦁","🦁",
    "🐯","🐯",
    "🦒","🦒",
    "🦝","🦝"
];

// Array para cartas abertas
let openCards = [];

// Sons do jogo
const flipSound = new Audio("./src/sounds/flip.m4a");
flipSound.load();

const matchSound = new Audio("./src/sounds/flipback.m4a");
matchSound.load();

const winSound = new Audio("./src/sounds/win.mp3"); // Se você tiver um som de vitória


// Função para tocar sons de forma independente
function playSound(sound) {
    const s = sound.cloneNode();
    s.play();
}

// Embaralhar emojis
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Criar cartas na tela
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

// Função ao clicar na carta
function handleClick() {
    // Verifica se pode abrir a carta (menos de 2 abertas, não aberta ou já combinada)
    if(openCards.length < 2 && !this.classList.contains("boxOpen") && !this.classList.contains("boxMatch")) {
        this.classList.add("boxOpen");
        playSound(flipSound); // Som ao virar
        openCards.push(this);
    }

    // Se abriu duas cartas, verifica se combinam
    if(openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

// Função para verificar se as cartas combinam
function checkMatch() {
    if(openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        playSound(matchSound); // Som ao acertar
        openCards = [];
    } else {
        setTimeout(() => {
            openCards[0].classList.remove("boxOpen");
            openCards[1].classList.remove("boxOpen");
            openCards = [];
        }, 500);
    }

    // Verifica se o jogador venceu
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        setTimeout(() => {
            playSound(winSound); // Som de vitória
            alert("Você venceu!");
        }, 600);
    }
}
