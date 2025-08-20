const locais = [
  {
    id: 1,
    nome: "Shopping Neumarkt",
    imagem: "https://www.noticenter.com.br/noticias/60e46c1485d9a.jpg",
    avaliacao: 4.5,
    tags: ["Rampas de Acesso", "Intérprete de Libras", "Piso Tátil"],
    endereco: "Rua XV de Novembro, 1418 - Centro, Blumenau - SC",
    telefone: "(47) 3326-3000",
    descricao: "Shopping com completa acessibilidade, incluindo rampas, intérprete de libras e piso tátil para facilitar a mobilidade.",
    gps: "https://www.google.com/maps/place/Neumarkt+Shopping/@-26.9208264,-49.0717457,17z/data=!3m1!4b1!4m6!3m5!1s0x94df18c3029c59cf:0x274ee00fa5617468!8m2!3d-26.9208312!4d-49.0691708!16s%2Fg%2F1tg4x_fh?entry=ttu&g_ep=EgoyMDI1MDgwNS4wIKXMDSoASAFQAw%3D%3D",
    acessibilidade: ["fisica", "auditiva"]
  },
  {
    id: 2,
    nome: "Biblioteca Pública Municipal",
    imagem: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    avaliacao: 4.8,
    tags: ["Braile", "Audiodescrição", "Rampas de Acesso"],
    endereco: "Rua 7 de Setembro, 1234 - Centro, Blumenau - SC",
    telefone: "(47) 3033-1122",
    descricao: "Biblioteca equipada com recursos para deficientes visuais, incluindo livros em braile, audiodescrição e acessos adaptados.",
    gps: "https://goo.gl/maps/BibliotecaBlumenau",
    acessibilidade: ["visual", "fisica"]
  },
  {
    id: 3,
    nome: "Parque Ramiro Ruediger",
    imagem: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    avaliacao: 4.7,
    tags: ["Piso Tátil", "Rampas", "Sinalização Clara"],
    endereco: "Av. Beira Rio, s/n - Centro, Blumenau - SC",
    telefone: "(47) 3381-0000",
    descricao: "Parque com infraestrutura inclusiva, sinalização para deficientes cognitivos e rampas de acesso em toda a área.",
    gps: "https://goo.gl/maps/ParqueRamiroBlumenau",
    acessibilidade: ["fisica", "visual"]
  },
  {
    id: 4,
    nome: "Teatro Carlos Gomes",
    imagem: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
    avaliacao: 4.9,
    tags: ["Intérprete de Libras", "Legendagem", "Elevador Adaptado"],
    endereco: "Rua XV de Novembro, 1500 - Centro, Blumenau - SC",
    telefone: "(47) 3321-4040",
    descricao: "Teatro com recursos para deficientes auditivos, como intérprete de libras nas apresentações e legendas nos eventos.",
    gps: "https://goo.gl/maps/TeatroCarlosGomes",
    acessibilidade: ["auditiva", "fisica"]
  }
];

const cardsList = document.getElementById('cards-list');
const modalOverlay = document.getElementById('modal-overlay');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalRating = document.getElementById('modal-rating');
const modalTags = document.getElementById('modal-tags');
const modalAddress = document.getElementById('modal-address');
const modalPhone = document.getElementById('modal-phone');
const modalDescription = document.getElementById('modal-description');
const modalGps = document.getElementById('modal-gps');
const modalClose = document.getElementById('modal-close');
const filterOptions = document.querySelectorAll('.filter-option');
const btnExplore = document.querySelector('.btn-primary');

function createStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let starsHTML = '';

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '★';
  }
  if (halfStar) starsHTML += '½'; 

  return starsHTML;
}

function renderCards(locaisArray) {
  cardsList.innerHTML = ''; // limpa a lista antes de criar novos cards

  locaisArray.forEach(local => {
    const card = document.createElement('article');
    card.className = 'card';
    card.tabIndex = 0; // para navegação por teclado
    card.setAttribute('role', 'button');
    card.setAttribute('aria-pressed', 'false');

    card.innerHTML = `
      <img src="${local.imagem}" alt="Foto do ${local.nome}" />
      <div class="card-body">
        <div class="card-title">
          ${local.nome}
          <span class="rating" aria-label="Avaliação: ${local.avaliacao} estrelas">${createStars(local.avaliacao)}</span>
        </div>
        <div class="tags">
          ${local.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="address" aria-label="Endereço">
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
          </svg>
          ${local.endereco}
        </div>
        <div class="phone" aria-label="Telefone">
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.466 15.466 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C7.61 21.5 2.5 16.39 2.5 10a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.35.27 2.67.76 3.88a1 1 0 0 1-.21 1.11l-2.2 2.2z"/>
          </svg>
          ${local.telefone}
        </div>
        <p class="card-description">${local.descricao}</p>
        <div class="card-buttons">
          <button class="btn-secondary" aria-label="Ver detalhes do ${local.nome}" data-id="${local.id}">Detalhes</button>
          <a href="${local.gps}" target="_blank" rel="noopener noreferrer" class="btn-gps" aria-label="Abrir localização do ${local.nome} no Google Maps">
            <svg viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
            </svg>
            GPS
          </a>
        </div>
      </div>
    `;

    cardsList.appendChild(card);
  });
}

// ===== Função para abrir o modal com detalhes =====
function openModal(local) {
  modalImg.src = local.imagem;
  modalImg.alt = `Foto do local ${local.nome}`;
  modalTitle.textContent = local.nome;
  modalRating.textContent = `Avaliação: ${local.avaliacao} ★`;
  modalTags.innerHTML = local.tags.map(tag => `<span class="tag primary">${tag}</span>`).join('');
  modalAddress.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
    </svg>
    <p>${local.endereco}</p>
  `;
  modalPhone.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.62 10.79a15.466 15.466 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C7.61 21.5 2.5 16.39 2.5 10a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.35.27 2.67.76 3.88a1 1 0 0 1-.21 1.11l-2.2 2.2z"/>
    </svg>
    <p>${local.telefone}</p>
  `;
  modalDescription.textContent = local.descricao;
  modalGps.href = local.gps;

  modalOverlay.classList.add('active');
  modalClose.focus();
}

// ===== Funções para fechar o modal =====
// Clique no X
modalClose.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});

// Clique fora do conteúdo do modal
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('active');
  }
});

// Tecla ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    modalOverlay.classList.remove('active');
  }
});

// ===== Abrir modal ao clicar no botão "Detalhes" =====
cardsList.addEventListener('click', e => {
  if (e.target.classList.contains('btn-secondary')) {
    const localId = Number(e.target.dataset.id);
    const local = locais.find(l => l.id === localId);
    if (local) openModal(local);
  }
});

// ===== Acessibilidade: abrir modal com teclado (Enter ou Espaço) =====
cardsList.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')) {
    const btnDetalhes = e.target.querySelector('.btn-secondary');
    if (btnDetalhes) {
      const localId = Number(btnDetalhes.dataset.id);
      const local = locais.find(l => l.id === localId);
      if (local) openModal(local);
    }
  }
});

// ===== Gerenciamento dos filtros =====
let activeFilters = [];

// Ativa/desativa filtros ao clicar
filterOptions.forEach(option => {
  option.addEventListener('click', () => {
    const type = option.dataset.type;

    if (option.classList.contains('active')) {
      option.classList.remove('active');
      activeFilters = activeFilters.filter(f => f !== type);
    } else {
      option.classList.add('active');
      activeFilters.push(type);
    }

    applyFilters();
  });
});

// Aplica filtros selecionados e renderiza os cards filtrados
function applyFilters() {
  if (activeFilters.length === 0) {
    renderCards(locais);
    return;
  }

  const filtered = locais.filter(local =>
    activeFilters.every(f => local.acessibilidade.includes(f))
  );

  renderCards(filtered);
}

// ===== Botão "Limpar Filtros" =====
const btnClearFilters = document.querySelector('.btn-clear-filters');
if (btnClearFilters) {
  btnClearFilters.addEventListener('click', () => {
    activeFilters = [];
    filterOptions.forEach(opt => opt.classList.remove('active'));
    renderCards(locais);
  });
}

// ===== Botão "Explorar" (limpa filtros e mostra tudo) =====
btnExplore.addEventListener('click', () => {
  activeFilters = [];
  filterOptions.forEach(opt => opt.classList.remove('active'));
  renderCards(locais);
});

// ===== Renderiza todos os locais quando a página carrega =====
renderCards(locais);

// ===== Inicializações e listeners extras protegidos com DOMContentLoaded =====
document.addEventListener('DOMContentLoaded', () => {
console.warn('Botão de acesso admin não encontrado (id="adminAccessBtn").');

  const btnClear = document.querySelector('.btn-clear-filters');
  if (btnClear) {
    btnClear.addEventListener('click', () => {
      if (typeof activeFilters === 'undefined') {
        window.activeFilters = [];
      } else {
        window.activeFilters.length = 0;
      }
      document.querySelectorAll('.filter-option').forEach(opt => opt.classList.remove('active'));
      if (typeof renderCards === 'function') {
        renderCards(locais);
      }
    });
  }
});

// ===== Modal de login para Admin =====
document.addEventListener('DOMContentLoaded', () => {
  const adminBtn = document.getElementById('adminAccessBtn');
  const modal = document.getElementById('loginModal');
  const closeBtn = document.querySelector('.close-btn');
  const submitBtn = document.getElementById('loginSubmit');

  if (adminBtn) {
    adminBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  // Fecha modal clicando fora do conteúdo
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

// Verifica login no modal admin
if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    const user = document.getElementById('adminUser').value.trim();
    const pass = document.getElementById('adminPass').value.trim();

    // Lista de logins e senhas válidas
    const credenciais = [
      { usuario: 'maripera', senha: '1111' },
      { usuario: 'lenamartins', senha: '2222' }
    ];

    // Verifica se existe um par usuário/senha válido
    const valido = credenciais.some(c => c.usuario === user && c.senha === pass);

    if (valido) {
      window.location.href = 'admin.html';
    } else {
      alert('Usuário ou senha incorretos!');
    }
  });





