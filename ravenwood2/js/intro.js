const cenas = document.querySelectorAll(".cena");
const musica = document.getElementById("musica");
const botaoSom = document.getElementById("botaoSom");
const botaoComecar = document.getElementById("comecar");

const btnSuspeitos = document.getElementById("btnSuspeitos");
const btnMansao = document.getElementById("btnMansao");

let cenaAtual = 0;

/* MÚSICA */

botaoSom.addEventListener("click", function () {
    if (musica.paused) {
        musica.play();
        botaoSom.textContent = "🔊";
    } else {
        musica.pause();
        botaoSom.textContent = "🔇";
    }
});

/* TROCAR CENA */

function trocarCena() {
    cenas[cenaAtual].classList.remove("ativa");
    cenaAtual++;

    if (cenaAtual < cenas.length) {
        cenas[cenaAtual].classList.add("ativa");
        programarProximaCena();
    }
}

/* TEMPO DAS CENAS */

function programarProximaCena() {
    let tempo;

    switch (cenaAtual) {
        case 0:
            // Mansão
            tempo = 6500;
            break;

        case 1:
            // Biblioteca
            tempo = 6500;
            break;

        case 2:
            // Algo terrível
            tempo = 5000;
            break;

        case 3:
            // Jornal
            tempo = 9000;
            break;

        case 4:
            // Relógio
            tempo = 6500;
            break;

        case 5:
            // Tela final de intro (espera o botão "COMEÇAR INVESTIGAÇÃO")
            tempo = null;
            break;

        case 6:
            // Ficha de Autópsia (Fica visível por 7 segundos e depois avança para a escolha)
            tempo = 7000;
            break;

        case 7:
            // Menu de Escolhas (Investigar Mansão / Suspeitos)
            tempo = null;
            break;
    }

    if (tempo !== null) {
        setTimeout(trocarCena, tempo);
    }
}

/* INICIAR INVESTIGAÇÃO (FICHA DE AUTÓPSIA + MÚSICA)*/

botaoComecar.addEventListener("click", function () {
    const estavaTocando = !musica.paused;

    // Troca para a música tema da mansão
    musica.src = "audio/mansao.mp3";

    if (estavaTocando) {
        musica.play();
    }

    // Avança para a Cena 6 (Ficha de Autópsia) com efeito de fade-in suave
    trocarCena();
});

/* AÇÕES DAS ESCOLHAS */

btnSuspeitos.addEventListener("click", function () {
    window.location.href = "interrogatorio.html";
});

btnMansao.addEventListener("click", function () {
    window.location.href = "mansao.html";
});

/* INICIAR */

programarProximaCena();