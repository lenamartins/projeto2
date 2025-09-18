document.addEventListener("DOMContentLoaded", () => {
 
  const locais = [
    {
      nome: "Parque Ramiro Ruediger",
      endereco: "R. Alberto Stein, 154 - Velha, Blumenau",
      telefone: "(47) 3381-7000",
      descricao: "Área de lazer com pista de caminhada, lago e acessibilidade (banheiros, rampas e espaços amplos).",
      gps: "https://maps.google.com/?q=Parque+Ramiro+Ruediger",
      img: "https://i.ytimg.com/vi/1PD8yadtzQk/maxresdefault.jpg",
      tags: ["fisica", "visual"],
      rating: 4.7
    },
    {
      nome: "Neumarkt Shopping",
      endereco: "R. Sete de Setembro, 1213 - Centro, Blumenau",
      telefone: "(47) 3037-9000",
      descricao: "Shopping acessível com elevadores, rampas, vagas reservadas e atendimento prioritário.",
      gps: "https://maps.google.com/?q=Neumarkt+Shopping+Blumenau",
      img: "https://startlife.com.br/wp-content/uploads/2023/09/NK-FACHADA.jpg",
      tags: ["fisica", "auditiva"],
      rating: 4.5
    },

    {
  nome: "Museu da Água Blumenau",
  endereco: "Rua Lages, s/n – Boa Vista – Blumenau – SC",
  telefone: "(47) 3381-6000",
  descricao: "Entrada gratuita, acessível ao público geral, visita guiada, mirante panorâmico, facilidades para PNE e estacionamento.",
  gps: "https://maps.app.goo.gl/uzD3odxDzRQLJ6738",
  img: "https://www.blogmeudestino.com/wp-content/uploads/2017/08/museu-da-agua-em-blumenau-sc-9-800x600.jpg",
  tags: ["fisica", "cadeirantes", "rampa"],
  rating: 4.7
},
{
  nome: "Museu da Família Colonial",
  endereco: "Rua Alberto Stein, 265 - Velha, Blumenau - SC",
  telefone: "(47) 3381-6100",
  descricao: "O Museu da Família Colonial oferece livro tátil para visitantes com deficiência visual e possui bom acesso geral, garantindo inclusão e acessibilidade.",
  gps: "https://maps.app.goo.gl/D7S1nA2uYAidhtQA7",
  img: "https://www.turismoblumenau.com.br/wp-content/uploads/2021/10/Museu-da-Familia-Colonial-arquivo-pref.-1024x687.png",
  tags: ["visual", "fisica"],
  rating: 4.6
},
{
  nome: "Museu da Cerveja",
  endereco: "Rua XV de Novembro, Centro – Blumenau – SC",
  telefone: "(47) 3326-7714",
  descricao: "Entrada com rampa, espaço interno amplo e plano, localizado em uma área central com infraestrutura adaptada, como calçadas rebaixadas e banheiros acessíveis próximos.",
  gps: "https://maps.app.goo.gl/K7j6VPgu2KnSpV1x5",
  img: "https://www.litoraldesantacatarina.com/wp-content/uploads/2010/10/foto-museu-da-cerveja.jpg",
  tags: ["fisica", "cadeirantes", "rampa"],
  rating: 4.4
},

{
  nome: "Catedral São Paulo Apóstolo",
  endereco: "R. XV de Novembro, 955 - Centro, Blumenau",
  telefone: "(47) 3322-0699",
  descricao: "A Catedral São Paulo Apóstolo é acessível por ter rampas de entrada, espaços amplos para circulação e calçadas adaptadas para cadeirantes.",
  gps: "https://www.google.com/maps/place/Catedral+S%C3%A3o+Paulo+Ap%C3%B3stolo/@-26.9196398,-49.0687201,17z/data=!3m1!4b1!4m6!3m5!1s0x94df18c50f08d7d9:0xe701bb177980fc9c!8m2!3d-26.9196446!4d-49.0661452!16s%2Fg%2F11ts3pzh24?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D",
  img: "https://www.viagensecaminhos.com/wp-content/uploads/2014/08/igreja-matriz-blumenau.jpg",
  tags: ["fisica"],
  rating: 4.8
},

{
  nome: "Prefeitura de Blumenau",
  endereco: "Prefeitura de Blumenau - Praça Victor Konder, 2, Centro, Blumenau - SC",
  telefone: "(47) 3381-6981",
  descricao: "Conta com placas acessíveis em pontos-chave, incluindo braille, pictogramas CAA, QR Codes com audiodescrição, alto-relevo e contraste visual.",
  gps: "https://maps.app.goo.gl/YAewynqJuMzgkgSY9",
  img: "https://www.turismoblumenau.com.br/wp-content/uploads/2021/10/Prefeitura-de-Blumenau-Credito_Clio-Luconi-1024x683.png",
  tags: ["visual", "auditiva", "comunicacao"],
  rating: 4.4
},
{
  nome: "Teatro Carlos Gomes",
  endereco: "R. XV de Novembro, 1181 - Centro, Blumenau",
  telefone: "(47) 3144-7166",
  descricao: "O Teatro Carlos Gomes passou por revitalização, ganhando rampas elevatórias, espaços e poltronas especiais, banheiros adaptados, assentos e circulação mais amplos, além de melhorias no forro, climatização e acústica, tudo preservando sua estética original.",
  gps: "https://maps.app.goo.gl/SXcHBMSzV8w5uHby5",
  img: "https://thumbs.dreamstime.com/b/teatro-de-carlos-gomes-blumenau-santa-catarina-75832294.jpg",
  tags: ["cadeirante", "mobilidade", "auditiva"],
  rating: 4.7
},
{
  nome: "Estação Unifique",
  endereco: "Landell de Moura - R. Padre Roberto Landel de Moura, 19 - Centro, Blumenau",
  telefone: "(47) 3304-1071",
  descricao: "A Estação Unifique oferece um ambiente acessível, com áreas amplas e niveladas que facilitam o deslocamento de cadeirantes e pessoas com mobilidade reduzida.",
  gps: "https://maps.app.goo.gl/rwWCsJGG8Z6j5uS6A",
  img: "https://i.ytimg.com/vi/5usnzA11PYE/maxresdefault.jpg",
  tags: ["cadeirante", "mobilidade"],
  rating: 4.5
}
   {
  nome: "Museu de Ecologia Fritz Müller",
  endereco: "Rua Itajaí, 2.195 - Vorstadt, Blumenau",
  telefone: "(47) 3222-3189",
  descricao: "Museu de ciências naturais com acervo de taxidermia, biblioteca, etc. Possui rampas, banheiros adaptados e acervos em brailes ",
  gps: "https://maps.google.com/?q=Museu+de+Ecologia+Fritz+Müller+Blumenau",
  img: "https://static.ndmais.com.br/2025/06/nd-1.jpg"
  tags: ["fisica", “visual”],
  rating: 5.0
},
{
  nome: "Museu Hering",
  endereco: "Rua Hermann Hering, 1.740 - Bom Retiro, Blumenau",
  telefone: "(47) 3321-3340",
  descricao: "Museu com história da moda e indústria têxtil. Acessibilidade física: rampas, elevador, banheiro semi adaptado. Acessibilidade visual: piso tátil, braile, réplicas táteis; também linguagem de Libras em alguns audiovisuais.",
  gps: "https://maps.google.com/?q=Museu+Hering+Blumenau",
  img: “https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/05/b7/2e/nossa-casinha-enxaimel.jpg?w=800&h=400&s=1”,
  tags: ["fisica", "visual", "auditiva"],
  rating: 4.6
},
{
  nome: "Museu de Arte de Blumenau",
  endereco: "Rua XV de Novembro, 161 - Centro, Blumenau",
  telefone: "(47) 3381-6176",
  descricao: "O MAB é um dos principais espaços culturais do município, dedicado às artes visuais. Ele se destaca por promover visitas sensoriais específicas para pessoas com deficiência visual, oferecendo a oportunidade de explorar obras por meio do toque e interação, em diálogo com médiadores culturais. Também realiza visitas mediadas, permitindo adaptações no ritmo e explicações mais acessíveis. Em algumas exposições, há peças interativas ou sensoriais, que favorecem diferentes formas de percepção.",
  gps: "https://maps.google.com/?q=Museu+de+Arte+de+Blumenau",
  img: "https://ocp.news/wp-content/uploads/2022/06/funda%C3%A7%C3%A3o-cultural-de-blumenau.jpg",
  tags: ["fisica"], 
  rating: 4.6
}
  ];

  const cardsList      = document.getElementById("cards-list");
  const filterOptions  = document.querySelectorAll(".filter-option");
  const clearBtn       = document.querySelector(".btn-clear-filters");
  const btnExplorar    = document.getElementById("btnExplorar");

  const modalOverlay     = document.getElementById("modal-overlay");
  const modalClose       = document.getElementById("modal-close");
  const modalTitle       = document.getElementById("modal-title");
  const modalImg         = document.getElementById("modal-img");
  const modalAddress     = document.getElementById("modal-address");
  const modalPhone       = document.getElementById("modal-phone");
  const modalDescription = document.getElementById("modal-description");
  const modalTags        = document.getElementById("modal-tags");
  const modalGps         = document.getElementById("modal-gps");
  const modalRating      = document.getElementById("modal-rating");

  const adminAccessBtn = document.getElementById("adminAccessBtn");
  const loginModal     = document.getElementById("loginModal");
  const loginClose     = document.getElementById("loginClose");
  const loginSubmit    = document.getElementById("loginSubmit");
  const loginError     = document.getElementById("loginError");
  const adminUser      = document.getElementById("adminUser");
  const adminPass      = document.getElementById("adminPass");

  const tagLabel = (t) => {
    if (t === "fisica") return "Física";
    if (t === "visual") return "Visual";
    if (t === "auditiva") return "Auditiva";
    return t;
  };

  function renderCards(lista) {
    cardsList.innerHTML = "";
    lista.forEach((local, idx) => {
      const card = document.createElement("div");
      card.className = "card";
      card.dataset.tags = local.tags.join(",");

      card.innerHTML = `
        <img src="${local.img}" alt="${local.nome}">
        <div class="card-body">
          <div class="card-title">
            <span>${local.nome}</span>
            <span class="rating">${local.rating ? local.rating.toFixed(1) + " ★" : ""}</span>
          </div>
          <div class="tags">
            ${local.tags.map(tag => `<span class="tag">${tagLabel(tag)}</span>`).join("")}
          </div>
          <div class="address">${local.endereco}</div>
          <div class="phone">${local.telefone}</div>
          <p class="card-description">${local.descricao}</p>
          <div class="card-buttons">
            <button class="btn-secondary btn-detalhes" data-index="${idx}">Ver detalhes</button>
            <a class="btn-gps" href="${local.gps}" target="_blank" rel="noopener noreferrer" aria-label="Abrir no Google Maps">
              <!-- ícone simples -->
              <svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
              Maps
            </a>
          </div>
        </div>
      `;

      cardsList.appendChild(card);
    });

    const btns = cardsList.querySelectorAll(".btn-detalhes");
    btns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const i = Number(btn.getAttribute("data-index"));
        openDetails(locais[i]);
      });
    });

    const allCards = cardsList.querySelectorAll(".card");
    allCards.forEach((c, i) => {
      c.addEventListener("click", (e) => {
        if (e.target.closest(".btn-gps")) return;
        openDetails(locais[i]);
      });
    });
  }

  function openDetails(local) {
    modalTitle.textContent = local.nome;
    modalImg.src = local.img;
    modalImg.alt = local.nome;
    modalAddress.textContent = local.endereco;
    modalPhone.textContent = local.telefone;
    modalDescription.textContent = local.descricao;
    modalTags.innerHTML = local.tags.map(tag => `<span class="tag">${tagLabel(tag)}</span>`).join("");
    modalGps.href = local.gps;
    modalRating.textContent = local.rating ? `${local.rating.toFixed(1)} ★` : "";
    modalOverlay.classList.add("active");
  }

  let currentFilter = null;

  function applyFilter() {
    if (!currentFilter) {
      renderCards(locais);
      return;
    }
    const filtrados = locais.filter(l => l.tags.includes(currentFilter));
    renderCards(filtrados);
  }

  filterOptions.forEach(option => {
    option.addEventListener("click", () => {
      const type = option.getAttribute("data-type"); 
      filterOptions.forEach(o => o.classList.remove("active"));
      option.classList.add("active");
      currentFilter = type;
      applyFilter();
    });
  });

  clearBtn.addEventListener("click", () => {
    currentFilter = null;
    filterOptions.forEach(o => o.classList.remove("active"));
    renderCards(locais);
  });

  modalClose.addEventListener("click", () => modalOverlay.classList.remove("active"));
  window.addEventListener("click", (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove("active");
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modalOverlay.classList.remove("active");
  });

  adminAccessBtn.addEventListener("click", () => { loginModal.style.display = "block"; });
  loginClose.addEventListener("click", () => { loginModal.style.display = "none"; });

  loginSubmit.addEventListener("click", () => {
    const user = adminUser.value.trim();
    const pass = adminPass.value.trim();
    if ((user === "mari" && pass === "1111") ||
    (user === "lena" && pass === "2222")) {
  loginModal.style.display = "none";
  loginError.style.display = "none";
  adminUser.value = "";
  adminPass.value = "";
  window.location.href = "admin.html";
} else {
  loginError.style.display = "block";
}

  });

  window.addEventListener("click", (e) => {
    if (e.target === loginModal) loginModal.style.display = "none";
  });

  if (btnExplorar) {
    btnExplorar.addEventListener("click", () => {
      document.getElementById("cards-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  renderCards(locais);
});


