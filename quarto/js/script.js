// Dados dos locais de inspeção
const inspecoes = {
  cabeceira: {
    imagem: 'img/ver-cabeceira.jpg',
    texto: 'Livro da Virginia Woolf intocado. O marcador de página continua no início, sugerindo que ela não leu durante a noite.',
    pistaId: 'livro_intocado',
    anotacao: 'Anotação: O livro na cabeceira de Vanessa estava intocado, contradizendo seu álibi.'
  },
  penteadeira: {
    imagem: 'img/ver-penteadeira.jpg',
    texto: 'Frascos de cosméticos e um pequeno vidro sem rótulo escondido atrás das pérolas, exalando cheiro amargo.',
    pistaId: 'frasco_veneno',
    anotacao: 'Anotação: Encontrado um frasco suspeito com resíduos amargos na penteadeira.'
  },
  cama: {
    imagem: 'img/ver-cama.jpg',
    texto: 'Os travesseiros de lavanda possuem marcas de poeira fina nas colchas.',
    pistaId: 'poeira_cama',
    anotacao: 'Anotação: Marcas recentes de movimentação no quarto durante a madrugada.'
  },
  planta: {
    imagem: 'img/ver-mesa-planta.jpg',
    texto: 'Sachet de lavanda caseiro e um vaso com flores secas. Há vestígios de pó vegetal sobre a mesa.',
    pistaId: 'po_vegetal',
    anotacao: 'Anotação: Resíduos de secagem de plantas encontrados perto do sachet de lavanda.'
  }
};

let itemAtual = null;
const pistasColetadas = new Set();

function inspecionar(local) {
  itemAtual = inspecoes[local];
  document.getElementById('zoom-img').src = itemAtual.imagem;
  document.getElementById('zoom-texto').innerText = itemAtual.texto;
  
  // Oculta o botão de anotar se já foi coletado
  const btnAnotar = document.getElementById('btn-anotar');
  if (pistasColetadas.has(itemAtual.pistaId)) {
    btnAnotar.style.display = 'none';
  } else {
    btnAnotar.style.display = 'inline-block';
  }

  document.getElementById('modal-zoom').classList.remove('hidden');
}

function fecharZoom() {
  document.getElementById('modal-zoom').classList.add('hidden');
}

function anotarPista() {
  if (itemAtual && !pistasColetadas.has(itemAtual.pistaId)) {
    pistasColetadas.add(itemAtual.pistaId);
    
    // Adiciona no caderno
    const lista = document.getElementById('lista-anotacoes');
    const li = document.createElement('li');
    li.innerText = itemAtual.anotacao;
    lista.appendChild(li);

    fecharZoom();
  }
}