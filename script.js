document.addEventListener('DOMContentLoaded', function() {
  // Controle da barra de pesquisa
  const searchBtn = document.getElementById('searchBtn');
  const searchBar = document.getElementById('searchBar');
  
  searchBtn.addEventListener('click', function(e) {
    e.preventDefault();
    searchBar.classList.toggle('d-none');
  });

  // Modal de informações
  const infoBtn = document.getElementById('infoBtn');
  infoBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const infoModal = new bootstrap.Modal(document.getElementById('infoModal'));
    infoModal.show();
  });

  const mushrooms = [
    {
      id: 1,
      name: "Favolus brasiliensis",
      image: "assets/images/favolus_brasiliensis.jpg",
      type: "edible",
      kingdom: "Fungi",
      division: "Basidiomycota",
      class: "Agaricomycetes",
      order: "Polyporales",
      family: "Meripilaceae",
      genus: "Favolus",
      species: "Favolus brasiliensis",
      description: "O cogumelo Favolus brasiliensis, também conhecido como 'Fungo favo de mel', é uma espécie fascinante encontrada nas regiões tropicais do Brasil."
    },
    {
      id: 2,
      name: "Pleurotus Djamor",
      image: "assets/images/pleurotus_djamor.jpg",
      type: "edible",
      kingdom: "Fungi",
      division: "Basidiomycota",
      class: "Agaricomycetes",
      order: "Agaricales",
      family: "Pleurotaceae",
      genus: "Pleurotus",
      species: "Pleurotus djamor",
      description: "O Pleurotus djamor, também conhecido como cogumelo-salmão, é uma espécie fascinante de cogumelo que atrai a atenção devido à sua coloração distintiva e propriedades culinárias."
    },
    {
      id: 3,
      name: "Agaricus campestris",
      image: "assets/images/agaricus_campestris.jpg",
      type: "edible",
      kingdom: "Fungi",
      division: "Basidiomycota",
      class: "Agaricomycetes",
      order: "Agaricales",
      family: "Agaricaceae",
      genus: "Agaricus",
      species: "Agaricus campestris",
      description: `O Agaricus campestris, também conhecido como cogumelo champignon de campo, é um cogumelo amplamente distribuído em diversas regiões do mundo.

      Descrição e Habitat:
      Possui um chapéu inicialmente globoso e de cor branca que, com o tempo, se expande e achatado, revelando lamelas rosadas e, posteriormente, escuras com esporos.

      Comestibilidade:
      Amplamente considerado comestível e um dos cogumelos mais consumidos no mundo. Sua textura suave, sabor delicado e aroma característico o tornam um ingrediente popular em diversos pratos culinários.`
    },
    {
      id: 4,
      name: "Pycnoporus sanguineus",
      image: "assets/images/pycnoporus_sanguineus.jpg",
      type: "inedible",
      kingdom: "Fungi",
      division: "Basidiomycota",
      class: "Agaricomycetes",
      order: "Polyporales",
      family: "Polyporaceae",
      genus: "Pycnoporus",
      species: "Pycnoporus sanguineus",
      description: `O Pycnoporus sanguineus, popularmente conhecido como "Orelha-de-pau", é uma espécie de cogumelo pertencente à família Polyporaceae.

      Descrição e Habitat:
      Sua característica mais marcante é a coloração intensa de vermelho-sangue que cobre seu corpo frutífero. Geralmente cresce em aglomerados sobre madeira em decomposição.

      Comestibilidade:
      Não é considerado comestível. A sua carne é dura e fibrosa, tornando-o impróprio para consumo humano.`
    },
    {
      id: 5,
      name: "Amanita phalloides",
      image: "assets/images/amanita_phalloides.jpg",
      type: "poisonous",
      kingdom: "Fungi",
      division: "Basidiomycota",
      class: "Agaricomycetes",
      order: "Agaricales",
      family: "Amanitaceae",
      genus: "Amanita",
      species: "Amanita phalloides",
      description: `A Amanita phalloides, mais conhecida como "chapéu-da-morte" ou "Cicuta verde", é uma espécie de cogumelo venenoso.

      Descrição e Habitat:
      Apresenta um chapéu convexo de cor verde-oliva a marrom, muitas vezes com tons mais claros nas bordas. O caule é delgado, branco e possui um anel na parte superior.

      Comestibilidade:
      Altamente venenosa e não é comestível. Contém compostos mortais, como as amatoxinas. A ingestão pode causar sérios danos aos órgãos internos.`
    },
    {
      id: 6,
      name: "Coprinus comatus",
      image: "assets/images/coprinus_comatus.jpg",
      type: "edible",
      kingdom: "Fungi",
      division: "Basidiomycota",
      class: "Agaricomycetes",
      order: "Agaricales",
      family: "Agaricaceae",
      genus: "Coprinus",
      species: "Coprinus comatus",
      description: `O Coprinus comatus, conhecido como "cogumelo tinta" ou "cogumelo cabeludo".

      Descrição e Habitat:
      Caracterizado por seu chapéu alongado, semelhante a um cilindro, que se estende quando jovem e se encolhe à medida que amadurece.

      Comestibilidade:
      Considerado comestível em seu estágio jovem, quando o chapéu ainda está estendido e as escamas são macias.`
    },
    {
      id: 7,
      name: "Lentinula edodes",
      image: "assets/images/shiitake.jpg",
      type: "edible",
      kingdom: "Fungi",
      division: "Basidiomycota",
      class: "Agaricomycetes",
      order: "Agaricales",
      family: "Marasmiaceae",
      genus: "Lentinula",
      species: "Lentinula edodes",
      description: `O Lentinula edodes, conhecido como Shiitake.

      Descrição e Habitat:
      Caracterizado por seus chapéus largos e carnudos, com uma coloração que varia de marrom a marrom-escuro.

      Comestibilidade:
      Altamente valorizado por sua textura firme e sabor umami, que o torna uma escolha popular na culinária.`
    },
  {
    id: 8,
    name: "Panaeolus cinctulus",
    image: "assets/images/panaeolus_cinctulus.jpg",
    type: "inedible",
    kingdom: "Fungi",
    division: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Bolbitiaceae",
    genus: "Panaeolus",
    species: "Panaeolus cinctulus",
    description: `Descrição e Habitat:
O Panaeolus cinctulus apresenta um chapéu cônico a convexo, com uma coloração variável que pode incluir tons de verde, marrom e cinza. À medida que amadurece, o chapéu pode desenvolver pequenos sulcos ou rugas. O estipe (haste) é delgado e frequentemente tem um anel perto do topo.

Comestibilidade:
O Panaeolus cinctulus é geralmente considerado não comestível devido à sua pequena estatura e textura frágil. Além disso, a falta de sabor distintivo e aroma apetitoso também contribui para sua exclusão da culinária.

Usos e Importância:
Embora não seja comumente usado na alimentação, o Panaeolus cinctulus tem importância na ecologia como parte do ciclo de decomposição de matéria orgânica.`
  },

  {
    id: 9,
    name: "Lycoperdon perlatum",
    image: "assets/images/Lycoperdon_perlatum.jpg",
    type: "inedible",
    kingdom: "Fungi",
    division: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Agaricaceae",
    genus: "Lycoperdon",
    species: "Lycoperdon perlatum",
    description: `Descrição e Habitat:
O Lycoperdon perlatum possui um corpo frutífero inicialmente esférico, com uma superfície externa coberta por pequenas protuberâncias ou espinhos. Encontrado principalmente em florestas, pastagens e jardins.

Comestibilidade:
O Lycoperdon perlatum não é considerado comestível na fase em que libera esporos. Quando os esporos são liberados, o cogumelo já está em um estágio avançado de maturação.

Usos e Importância:
O Lycoperdon perlatum desempenha um papel ecológico importante como um decompositor, ajudando na reciclagem de matéria orgânica em ambientes florestais.`
  },
  {
    id: 10,
    name: "Psilocybe cubensis",
    image: "assets/images/Psilocybe_cubensis.jpg",
    type: "psychoactive",
    kingdom: "Fungi",
    division: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Strophariaceae",
    genus: "Psilocybe",
    species: "Psilocybe cubensis",
    description: `Descrição e Habitat:
O Psilocybe cubensis é caracterizado por seu chapéu cônico e escuro, que pode variar em tons de marrom, além de um caule cilíndrico. Ele cresce em habitats naturais como pastagens e florestas tropicais.

Comestibilidade:
O Psilocybe cubensis é conhecido por conter substâncias psicoativas, como a psilocibina e a psilocina, que induzem experiências alteradas de percepção e consciência.

Importância:
Tem despertado interesse na comunidade científica devido ao potencial terapêutico da psilocibina no tratamento de distúrbios mentais.`
  },
  {
    id: 11,
    name: "Panaeolus cyanescens",
    image: "assets/images/Panaeolus_cyanescens.jpg",
    type: "psychoactive",
    kingdom: "Fungi",
    division: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Psathyrellaceae",
    genus: "Panaeolus",
    species: "Panaeolus cyanescens",
    description: `Descrição e Habitat:
Conhecido como cogumelo azul, o Panaeolus cyanescens apresenta um chapéu de coloração marrom-escura, muitas vezes com um centro mais claro e margens onduladas.

Comestibilidade:
Embora alguns relatos mencionem que seja consumido em algumas culturas, não é recomendado seu consumo devido à presença de compostos psicoativos.

Usos:
É principalmente conhecido por seus efeitos alucinógenos devido à psilocibina e psilocina.`
  },
  {
    id: 12,
    name: "Panaeolus papilionaceus",
    image: "assets/images/Panaeolus_sphinctrinus.jpg",
    type: "psychoactive",
    kingdom: "Fungi",
    division: "Basidiomycota",
    class: "Agaricomycetes",
    order: "Agaricales",
    family: "Psathyrellaceae",
    genus: "Panaeolus",
    species: "Panaeolus papilionaceus",
    description: `Descrição e Habitat:
O Panaeolus sphinctrinus apresenta um chapéu de coloração acinzentada ou marrom-escura, frequentemente com um pequeno anel que pode ser observado na parte superior do seu estipe.

Comestibilidade:
Embora alguns cogumelos do gênero Panaeolus sejam relatados como comestíveis em algumas culturas, o Panaeolus sphinctrinus é geralmente considerado não comestível.

Usos:
É conhecido por conter compostos alucinógenos, como a psilocibina e a psilocina.`
  }
];


  // Função para renderizar os cogumelos
  function renderMushrooms() {
    const container = document.getElementById('mushroomsContainer');
    container.innerHTML = '';

    mushrooms.forEach(mushroom => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4 mb-4';
      
      const card = document.createElement('div');
      card.className = 'card mushroom-card h-100';
      
      const badgeConfig = {
        edible: { icon: 'bi-egg-fried', class: 'edible-badge', tooltip: 'Comestível' },
        poisonous: { icon: 'bi-exclamation-triangle', class: 'poisonous-badge', tooltip: 'Venenoso' },
        psychoactive: { icon: 'bi-activity', class: 'psychoactive-badge', tooltip: 'Psicoativo' },
        inedible: { icon: 'bi-slash-circle', class: 'inedible-badge', tooltip: 'Não comestível' }
      };

      const type = mushroom.type in badgeConfig ? mushroom.type : 'inedible';
      const { icon, class: badgeClass, tooltip } = badgeConfig[type];

      // Cria o elemento do ícone separadamente
      const badgeIcon = document.createElement('i');
      badgeIcon.className = `bi ${icon} mushroom-badge ${badgeClass}`;
      badgeIcon.setAttribute('data-bs-toggle', 'tooltip');
      badgeIcon.setAttribute('data-bs-placement', 'top');
      badgeIcon.setAttribute('title', tooltip);
      
      // Cria o botão de detalhes com evento diretamente
      const detailsButton = document.createElement('button');
      detailsButton.className = 'btn btn-success btn-sm view-details';
      detailsButton.setAttribute('data-id', mushroom.id);
      detailsButton.textContent = 'Ver detalhes';
      detailsButton.addEventListener('click', () => showMushroomDetails(mushroom.id));
      
      // Conteúdo do card
      card.innerHTML = `
        <img src="${mushroom.image}" class="card-img-top mushroom-img" alt="${mushroom.name}" loading="lazy">
        <div class="card-body">
          <h5 class="card-title mushroom-title">${mushroom.name}</h5>
          <p class="card-text">
            <strong>Família:</strong> ${mushroom.family}<br>
            <strong>Gênero:</strong> ${mushroom.genus}
          </p>
        </div>
      `;

      // Adiciona o botão e o ícone manualmente
      card.querySelector('.card-body').appendChild(detailsButton);
      card.appendChild(badgeIcon);
      col.appendChild(card);
      container.appendChild(col);
    });

    // Inicializa tooltips
    initTooltips();
  }

  function initTooltips() {
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl);
      });
    } else {
      console.warn('Bootstrap Tooltip não está disponível');
    }
  }

  function getBadgeTitle(type) {
    switch(type) {
      case 'edible': 
        return '<span class="badge edible-badge">Comestível</span>';
      case 'poisonous': 
        return '<span class="badge poisonous-badge">Venenoso</span>';
      case 'psychoactive': 
        return '<span class="badge psychoactive-badge">Psicoativo</span>';
      default: 
        return '<span class="badge inedible-badge">Não comestível</span>';
    }
  }

  // Função para mostrar detalhes do cogumelo no modal
  function showMushroomDetails(id) {
    const mushroom = mushrooms.find(m => m.id === id);
    if (!mushroom) return;
    
    const modal = new bootstrap.Modal(document.getElementById('mushroomModal'));
    document.getElementById('mushroomModalTitle').textContent = mushroom.name;
    document.getElementById('mushroomModalImage').src = mushroom.image;
    document.getElementById('mushroomModalImage').alt = mushroom.name;
    
    const modalContent = document.getElementById('mushroomModalContent');
    
    // Cria o conteúdo do modal de forma dinâmica
    let contentHTML = `
      <div class="row">
        <div class="col-md-6">
          <p><strong>Reino:</strong> ${mushroom.kingdom}</p>
          <p><strong>Divisão:</strong> ${mushroom.division}</p>
          <p><strong>Classe:</strong> ${mushroom.class}</p>
          <p><strong>Ordem:</strong> ${mushroom.order}</p>
        </div>
        <div class="col-md-6">
          <p><strong>Família:</strong> ${mushroom.family}</p>
          <p><strong>Gênero:</strong> ${mushroom.genus}</p>
          <p><strong>Espécie:</strong> ${mushroom.species}</p>
          <p><strong>Tipo:</strong> ${getBadgeTitle(mushroom.type)}</p>
        </div>
      </div>
      <hr>
      <div class="mushroom-description">
        ${formatDescription(mushroom.description)}
      </div>
      ${getWarningText(mushroom.type)}
    `;
   
    modalContent.innerHTML = contentHTML;
    modal.show();
  }

  // Função auxiliar para formatar a descrição com quebras de linha
  function formatDescription(desc) {
    return desc.split('\n').map(paragraph => {
      if (paragraph.trim().startsWith('Descrição') || 
          paragraph.trim().startsWith('Comestibilidade') ||
          paragraph.trim().startsWith('Habitat')) {
        return `<p class="fw-bold">${paragraph}</p>`;
      }
      return `<p>${paragraph}</p>`;
    }).join('');
  }

  // Função auxiliar para o texto de aviso
  function getWarningText(type) {
    if (type === 'poisonous') {
      return `
        <div class="alert alert-danger mt-3">
          <i class="bi bi-exclamation-triangle-fill"></i>
          ATENÇÃO: Este cogumelo é venenoso e não deve ser consumido em nenhuma circunstância.
        </div>
      `;
    } else if (type === 'edible') {
      return `
        <div class="alert alert-warning mt-3">
          <i class="bi bi-exclamation-triangle"></i>
          É crucial lembrar que a segurança alimentar deve ser priorizada, e qualquer consumo desse cogumelo deve ser realizado com cautela e conhecimento adequado.
        </div>
      `;
    }
    return '';
  }

  // Funções da Câmera
  let stream = null;

  document.querySelector('a[href="camera.html"]')?.addEventListener('click', function(e) {
    e.preventDefault();
    const cameraModal = new bootstrap.Modal(document.getElementById('cameraModal'));
    cameraModal.show();
  });

  document.getElementById('startCamera')?.addEventListener('click', startCamera);
  document.getElementById('capturePhoto')?.addEventListener('click', capturePhoto);
  document.getElementById('uploadBtn')?.addEventListener('click', () => document.getElementById('fileInput').click());
  document.getElementById('fileInput')?.addEventListener('change', handleFileUpload);
  document.getElementById('retryButton')?.addEventListener('click', resetCameraUI);
  document.getElementById('analyzeButton')?.addEventListener('click', analyzeImage);

  async function startCamera() {
    try {
      const video = document.getElementById('cameraPreview');
      const placeholder = document.getElementById('cameraPlaceholder');
      
      stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' }, 
        audio: false 
      });
      
      video.srcObject = stream;
      video.classList.remove('d-none');
      placeholder.classList.add('d-none');
      document.getElementById('capturePhoto').classList.remove('d-none');
      document.getElementById('startCamera').classList.add('d-none');
    } catch (err) {
      alert('Não foi possível acessar a câmera: ' + err.message);
    }
  }

  function capturePhoto() {
    const video = document.getElementById('cameraPreview');
    const canvas = document.getElementById('photoCanvas');
    const context = canvas.getContext('2d');
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    showImagePreview(canvas.toDataURL('image/jpeg'));
    stopCamera();
  }

  function stopCamera() {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      document.getElementById('cameraPreview').classList.add('d-none');
      document.getElementById('cameraPlaceholder').classList.remove('d-none');
    }
  }

  function handleFileUpload(e) {
    const file = e.target.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (event) => showImagePreview(event.target.result);
      reader.readAsDataURL(file);
      document.getElementById('fileName').textContent = file.name;
    }
  }

  function showImagePreview(imageSrc) {
    const preview = document.getElementById('imagePreview');
    preview.src = imageSrc;
    document.getElementById('imagePreviewContainer').classList.remove('d-none');
  }

  function resetCameraUI() {
    document.getElementById('imagePreviewContainer').classList.add('d-none');
    document.getElementById('fileInput').value = '';
    document.getElementById('fileName').textContent = '';
    document.getElementById('startCamera').classList.remove('d-none');
  }

  async function analyzeImage() {
    const imageSrc = document.getElementById('imagePreview').src;
    
    bootstrap.Modal.getInstance(document.getElementById('cameraModal')).hide();
    const resultModal = new bootstrap.Modal(document.getElementById('resultModal'));
    resultModal.show();
    
    setTimeout(() => {
      document.getElementById('loadingAnalysis').classList.add('d-none');
      const resultContent = document.getElementById('resultContent');
      
      resultContent.innerHTML = `
        <div class="alert alert-success">
          <h4><i class="bi bi-check-circle"></i> Amanita muscaria</h4>
          <p>Identificado com 87% de confiança</p>
        </div>
        <div class="text-start mt-3">
          <p><strong>Características:</strong> Chapéu vermelho com manchas brancas</p>
          <p><strong>Tipo:</strong> <span class="badge bg-danger">Venenoso</span></p>
          <p class="alert alert-warning mt-3"><i class="bi bi-exclamation-triangle"></i> Este cogumelo é potencialmente perigoso. Não consuma.</p>
          <button class="btn btn-outline-success w-100 mt-2" onclick="window.location.href='#'">
            Ver detalhes completos
          </button>
        </div>
      `;
      resultContent.classList.remove('d-none');
    }, 3000);
  }

  // Inicializa a página
  renderMushrooms();

  // Verifica se o Bootstrap está carregado
  if (typeof bootstrap === 'undefined') {
    console.error('Bootstrap não carregado!');
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css';
    document.head.appendChild(link);
  }
});