document.addEventListener("DOMContentLoaded", () => {
  // ===================== LOGIN =====================
  const adminAccessBtn = document.getElementById("adminAccessBtn");
  const loginModal = document.getElementById("loginModal");
  const loginClose = document.getElementById("loginClose");
  const loginSubmit = document.getElementById("loginSubmit");
  const loginError = document.getElementById("loginError");

  const adminUser = document.getElementById("adminUser");
  const adminPass = document.getElementById("adminPass");

  // Abrir modal de login
  adminAccessBtn.addEventListener("click", () => {
    loginModal.style.display = "block";
  });

  // Fechar modal
  loginClose.addEventListener("click", () => {
    loginModal.style.display = "none";
  });

  // Validação simples de login
  loginSubmit.addEventListener("click", () => {
    const user = adminUser.value.trim();
    const pass = adminPass.value.trim();

    if (user === "admin" && pass === "1234") {
      alert("Login bem-sucedido!");
      loginModal.style.display = "none";
      loginError.style.display = "none";
      adminUser.value = "";
      adminPass.value = "";
    } else {
      loginError.style.display = "block";
    }
  });

  // Fechar modal clicando fora
  window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
      loginModal.style.display = "none";
    }
  });

  // ===================== LISTA DE LOCAIS =====================
  const locais = [
    {
      nome: "Parque Ramiro Ruediger",
      endereco: "R. Alberto Stein, 154 - Velha, Blumenau",
      telefone: "(47) 3381-7000",
      descricao: "Área de lazer com pista de caminhada, lago e acessibilidade.",
      gps: "https://maps.google.com/?q=Parque+Ramiro+Ruediger",
      img: "https://via.placeholder.com/400x200",
      tags: ["física", "visual"]
    },
    {
      nome: "Neumarkt Shopping",
      endereco: "R. Sete de Setembro, 1213 - Centro, Blumenau",
      telefone: "(47) 3037-9000",
      descricao: "Shopping acessível com elevadores e rampas.",
      gps: "https://maps.google.com/?q=Neumarkt+Shopping+Blumenau",
      img: "https://via.placeholder.com/400x200",
      tags: ["física", "auditiva"]
    }
  ];

  const cardsList = document.getElementById("cards-list");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalClose = document.getElementById("modal-close");

  const modalTitle = document.getElementById("modal-title");
  const modalImg = document.getElementById("modal-img");
  const modalAddress = document.getElementById("modal-address");
  const modalPhone = document.getElementById("modal-phone");
  const modalDescription = document.getElementById("modal-description");
  const modalTags = document.getElementById("modal-tags");
  const modalGps = document.getElementById("modal-gps");

  // Renderizar cartões
  locais.forEach((local) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${local.img}" alt="${local.nome}">
      <h3>${local.nome}</h3>
      <p>${local.endereco}</p>
    `;
    card.addEventListener("click", () => {
      modalTitle.textContent = local.nome;
      modalImg.src = local.img;
      modalAddress.textContent = local.endereco;
      modalPhone.textContent = local.telefone;
      modalDescription.textContent = local.descricao;
      modalTags.textContent = "Acessibilidade: " + local.tags.join(", ");
      modalGps.href = local.gps;

      modalOverlay.style.display = "flex";
    });
    cardsList.appendChild(card);
  });

  // Fechar modal de detalhes
  modalClose.addEventListener("click", () => {
    modalOverlay.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.style.display = "none";
    }
  });
});
