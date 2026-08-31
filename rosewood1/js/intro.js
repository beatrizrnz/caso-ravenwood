
const cenas = document.querySelectorAll(".cena");

const musica = document.getElementById("musica");

const botaoSom = document.getElementById("botaoSom");

const botaoComecar = document.getElementById("comecar");


let cenaAtual = 0;


/* =================================
   MÚSICA
================================= */

botaoSom.addEventListener("click", function () {

    if (musica.paused) {

        musica.play();

        botaoSom.textContent = "🔊";

    } else {

        musica.pause();

        botaoSom.textContent = "🔇";

    }

});


/* =================================
   TROCAR CENA
================================= */

function trocarCena() {

    cenas[cenaAtual].classList.remove("ativa");

    cenaAtual++;

    if (cenaAtual < cenas.length) {

        cenas[cenaAtual].classList.add("ativa");

        programarProximaCena();

    }

}


/* =================================
   TEMPO DAS CENAS
================================= */

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

            // Tela final
            tempo = null;

            break;

    }


    if (tempo !== null) {

        setTimeout(trocarCena, tempo);

    }

}


/* =================================
   COMEÇAR
================================= */

botaoComecar.addEventListener("click", function () {

    /*
        Por enquanto é apenas um teste.

        Depois vamos trocar isso pela
        tela principal da investigação.
    */

    alert("A investigação começará aqui!");

});


/* =================================
   INICIAR
================================= */

programarProximaCena();
