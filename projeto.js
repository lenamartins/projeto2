document.addEventListener("DOMContentLoaded", () => {
    
    // --- DADOS INICIAIS (Seus locais) ---
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
            gps: "https://www.google.com/maps/search/?api=1&query=-26.917250,-49.063500",
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
            endereco: "Praça Víctor Konder, Centro, Blumenau - SC",
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
            gps: "https://share.google/pWi5Oj9P5Y6QBzc36",
            img: "https://www.turismoblumenau.com.br/wp-content/uploads/2021/10/Prefeitura-de-Blumenau-Credito_Clio-Luconi-1024x683.png",
            tags: ["visual", "auditiva", "comunicacao"],
            rating: 4.4
        },
        {
            nome: "Teatro Carlos Gomes",
            endereco: "https://maps.app.goo.gl/SXcHBMSzV8w5uHby5",
            telefone: "(47) 3144-7166",
            descricao: "O Teatro Carlos Gomes passou por revitalização, ganhando rampas elevatórias, espaços e poltronas especiais, banheiros adaptados, assentos e circulação mais amplos, além de melhorias no forro, climatização e acústica, tudo preservando sua estética original.",
            gps: "https://maps.app.goo.gl/SXcHBMSzV8w5uHby5",
            img: "https://thumbs.dreamstime.com/b/teatro-de-carlos-gomes-blumenau-santa-catarina-75832294.jpg",
            tags: ["cadeirante", "mobilidade", "auditiva"],
            rating: 4.7
        },
        {
            nome: "Estação Unifique",
            endereco: "https://www.google.com/maps/place/ESTAÇÃO+UNIFIQUE",
            telefone: "(47) 3304-1071",
            descricao: "A Estação Unifique oferece um ambiente acessível, com áreas amplas e niveladas que facilitam o deslocamento de cadeirantes e pessoas com mobilidade reduzida.",
            gps: "https://www.google.com/maps/place/ESTAÇÃO+UNIFIQUE",
            img: "https://i.ytimg.com/vi/5usnzA11PYE/maxresdefault.jpg",
            tags: ["cadeirante", "mobilidade"],
            rating: 4.5
        }
    ];

    // --- VARIÁVEIS DO DOM ---
    const cardsList = document.getElementById("cards-list");
    const filterOptions = document.querySelectorAll(".filter-option");
    const clearBtn = document.querySelector(".btn-clear-filters");
    
    // Variáveis do Modal
    const modalOverlay = document.getElementById("modal-overlay");
    const modalClose = document.getElementById("modal-close");
    const modalTitle = document.getElementById("modal-title");
    const modalImg = document.getElementById("modal-img");
    const modalAddress = document.getElementById("modal-address");
    const modalPhone = document.getElementById("modal-phone");
    const modalDescription = document.getElementById("modal-description");
    const modalTags = document.getElementById("modal-tags");
    const modalGps = document.getElementById("modal-gps");
    const modalRating = document.getElementById("modal-rating");
    
    // Variáveis do Login
    const adminAccessBtn = document.getElementById("adminAccessBtn");
    const loginModal = document.getElementById("loginModal");
    const loginClose = document.getElementById("loginClose");
    const adminUser = document.getElementById("adminUser");
    const adminPass = document.getElementById("adminPass");
    const loginSubmit = document.getElementById("loginSubmit");
    const loginError = document.getElementById("loginError");

    // Variáveis de Comentários (NOVAS)
    const suggestionForm = document.getElementById("suggestionForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const suggestionInput = document.getElementById("suggestion");
    const thankYouMessage = document.getElementById("thankYouMessage");
    const commentFormContainer = document.getElementById("commentFormContainer");
    const commentsListContainer = document.getElementById("commentsListContainer");

    // --- FUNÇÕES DE LÓGICA PRINCIPAL (Filtro e Cards) ---

    function createCard(local) {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.tags = local.tags.join(",");
        card.innerHTML = `
            <img src="${local.img}" alt="Imagem de ${local.nome}" />
            <div class="card-body">
                <div class="card-title">
                    <h4>${local.nome}</h4>
                    <span class="rating">${local.rating} ★</span>
                </div>
                <div class="tags">
                    ${local.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="address">${local.endereco}</div>
                <p class="card-description">${local.descricao.substring(0, 80)}...</p>
                <div class="card-buttons">
                    <button class="btn-secondary btn-details" data-name="${local.nome}">Detalhes</button>
                    <a href="${local.gps}" target="_blank" class="btn-gps">GPS</a>
                </div>
            </div>
        `;
        
        card.querySelector('.btn-details').addEventListener('click', () => showModal(local));
        card.addEventListener('click', (e) => {
            // Garante que o clique no card inteiro, mas não nos botões, abra o modal
            if (!e.target.closest('.btn-secondary') && !e.target.closest('.btn-gps')) {
                showModal(local);
            }
        });

        return card;
    }

    function renderCards(currentLocais) {
        cardsList.innerHTML = "";
        if (currentLocais.length === 0) {
            cardsList.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">Nenhum local encontrado com os filtros selecionados.</p>';
            return;
        }
        currentLocais.forEach(local => {
            cardsList.appendChild(createCard(local));
        });
    }

    function filterLocais() {
        const activeFilters = Array.from(filterOptions)
            .filter(option => option.classList.contains("active"))
            .map(option => option.dataset.type);

        if (activeFilters.length === 0) {
            renderCards(locais);
            return;
        }

        const filtered = locais.filter(local => 
            activeFilters.every(filter => local.tags.includes(filter))
        );

        renderCards(filtered);
    }

    // --- FUNÇÕES DO MODAL ---

    function showModal(local) {
        modalTitle.textContent = local.nome;
        modalImg.src = local.img;
        modalImg.alt = `Imagem de ${local.nome}`;
        modalRating.textContent = `${local.rating} ★`;
        modalAddress.textContent = local.endereco;
        modalPhone.textContent = local.telefone;
        modalDescription.textContent = local.descricao;
        
        modalTags.innerHTML = local.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        modalGps.href = local.gps;
        
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evita scroll da página principal
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // --- EVENT LISTENERS GERAIS (Filtro e Modal) ---

    filterOptions.forEach(option => {
        option.addEventListener("click", function() {
            this.classList.toggle("active");
            filterLocais();
        });
    });

    clearBtn.addEventListener("click", () => {
        filterOptions.forEach(option => option.classList.remove("active"));
        filterLocais();
    });

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // --- LÓGICA DE ACESSO RESTRITO/LOGIN ---

    adminAccessBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    loginClose.addEventListener('click', () => {
        loginModal.style.display = 'none';
        loginError.style.display = 'none';
        adminUser.value = '';
        adminPass.value = '';
    });

    // Login Simples (Apenas para demonstração)
    loginSubmit.addEventListener('click', () => {
        if (adminUser.value === 'admin' && adminPass.value === '1234') {
            alert('Acesso Concedido! Implemente sua lógica de administração aqui.');
            loginModal.style.display = 'none';
            // Você pode adicionar um token ou variável de sessão aqui
        } else {
            loginError.style.display = 'block';
        }
    });
    
    // --- LÓGICA DE COMENTÁRIOS (NOVA) ---

    // Função para obter todos os comentários do localStorage
    const getComments = () => {
        const commentsJSON = localStorage.getItem('siteComments');
        return commentsJSON ? JSON.parse(commentsJSON) : [];
    };

    // Função para salvar a lista de comentários no localStorage
    const saveComments = (comments) => {
        localStorage.setItem('siteComments', JSON.stringify(comments));
    };

    // Função para exibir um comentário individual na tela
    const renderComment = (comment, index) => {
        const commentCard = document.createElement('div');
        commentCard.className = 'comment-card';
        // A data-index ajuda a referenciar o item correto no array, mesmo que ele seja reordenado
        commentCard.dataset.index = index; 

        // Formata a data
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const dateStr = new Date(comment.date).toLocaleDateString('pt-BR', dateOptions);

        commentCard.innerHTML = `
            <div class="comment-header">
                <strong>${comment.name}</strong>
                <span class="comment-date">${dateStr}</span>
            </div>
            <p class="comment-content">${comment.suggestion}</p>
            <div class="comment-actions">
                <button class="edit-btn">Editar</button>
                <button class="delete-btn">Apagar</button>
            </div>
        `;
        
        commentsListContainer.prepend(commentCard); // Usa prepend para exibir o mais novo no topo

        // --- Lógica de Edição ---
        const editBtn = commentCard.querySelector('.edit-btn');
        const deleteBtn = commentCard.querySelector('.delete-btn');
        const contentP = commentCard.querySelector('.comment-content');

        editBtn.addEventListener('click', () => {
            if (editBtn.textContent === 'Editar') {
                // MODO EDIÇÃO: Substitui o <p> por um <textarea>
                const textarea = document.createElement('textarea');
                textarea.className = 'edit-comment-area';
                textarea.value = comment.suggestion;
                
                commentCard.insertBefore(textarea, contentP);
                contentP.style.display = 'none';

                editBtn.textContent = 'Salvar';
                deleteBtn.textContent = 'Cancelar';
                deleteBtn.classList.remove('delete-btn');
            } else { // Botão Salvar
                const textarea = commentCard.querySelector('.edit-comment-area');
                const newSuggestion = textarea ? textarea.value : comment.suggestion;

                if (newSuggestion.trim() === '') {
                    alert('O comentário não pode estar vazio.');
                    return;
                }

                // Atualiza o array no localStorage
                const allComments = getComments();
                // O índice deve ser recalculado no momento da edição para garantir que não houve exclusões
                const realIndex = Array.from(commentsListContainer.children).findIndex(child => child === commentCard);

                if (realIndex !== -1) {
                    // A nova lista é invertida, então o índice precisa ser invertido também
                    const reversedComments = allComments.slice().reverse();
                    reversedComments[realIndex].suggestion = newSuggestion;
                    // Salva a lista original, que foi modificada pelo reversedComments
                    saveComments(reversedComments.slice().reverse());
                }

                // Atualiza a visualização
                contentP.textContent = newSuggestion;
                contentP.style.display = 'block';
                textarea.remove();

                editBtn.textContent = 'Editar';
                deleteBtn.textContent = 'Apagar';
                deleteBtn.classList.add('delete-btn');
            }
        });

        // --- Lógica de Apagar/Cancelar ---
        deleteBtn.addEventListener('click', () => {
            if (deleteBtn.textContent === 'Apagar') {
                // MODO APAGAR: Confirmação e exclusão
                if (confirm('Tem certeza que deseja apagar este comentário?')) {
                    // Encontra o índice real na lista do DOM
                    const realIndex = Array.from(commentsListContainer.children).findIndex(child => child === commentCard);
                    
                    let allComments = getComments();
                    
                    if (realIndex !== -1) {
                         // A lista está invertida na tela, o índice precisa ser ajustado
                        const reversedComments = allComments.slice().reverse();
                        reversedComments.splice(realIndex, 1);
                        saveComments(reversedComments.slice().reverse());
                    }
                    
                    commentCard.remove();
                    // Se não houver mais comentários, exibe a mensagem padrão
                    if (getComments().length === 0) {
                         commentsListContainer.innerHTML = '<p style="text-align: center; color: #6c757d;">Seja o primeiro a comentar!</p>';
                    }
                }
            } else { // Botão Cancelar
                // Sai do modo edição sem salvar
                const textarea = commentCard.querySelector('.edit-comment-area');
                if (textarea) {
                    textarea.remove();
                }
                contentP.style.display = 'block';

                editBtn.textContent = 'Editar';
                deleteBtn.textContent = 'Apagar';
                deleteBtn.classList.add('delete-btn');
            }
        });
    };

    // Função principal para carregar e exibir todos os comentários
    const loadComments = () => {
        commentsListContainer.innerHTML = ''; // Limpa a lista antes de recarregar
        const comments = getComments();
        
        if (comments.length === 0) {
            commentsListContainer.innerHTML = '<p style="text-align: center; color: #6c757d;">Seja o primeiro a comentar!</p>';
            return;
        }
        
        // Inverte a ordem para exibir o mais novo no topo (LIFO)
        const commentsReversed = comments.slice().reverse(); 

        commentsReversed.forEach((comment, index) => {
            // O index aqui é o index da lista invertida
            renderComment(comment, index); 
        });
    };

    // Lógica de Envio do Formulário
    suggestionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newComment = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            suggestion: suggestionInput.value.trim(),
            date: new Date().toISOString() // Salva a data para ordenação/exibição
        };

        // Adiciona o novo comentário
        const comments = getComments();
        comments.push(newComment);
        saveComments(comments);

        // Limpa o formulário e mostra a mensagem de sucesso
        suggestionForm.reset();
        commentFormContainer.style.display = 'none';
        thankYouMessage.style.display = 'block';

        // Oculta a mensagem de sucesso após 5 segundos
        setTimeout(() => {
            thankYouMessage.style.display = 'none';
            commentFormContainer.style.display = 'block';
        }, 5000);

        // Recarrega a lista de comentários para incluir o novo no topo
        loadComments();
    });

    // --- Inicialização ---
    // Renderiza os cards de locais ao carregar
    renderCards(locais);
    
    // Carrega os comentários ao iniciar a página
    loadComments();

});
