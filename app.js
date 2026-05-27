/**
 * SuperLista - Lista de Compras Inteligente e Premium
 * Lógica da Aplicação (JavaScript Vanilla ES6)
 */

// ==========================================================================
// DADOS DE REFERÊNCIA & AUTO-CATEGORIZAÇÃO INTELIGENTE
// ==========================================================================

const CATEGORIA_EMOJIS = {
    "Frutas": "🍎",
    "Limpeza e Higiene": "🧼",
    "Casa e Cozinha": "🏠",
    "Congelados": "❄️",
    "Bebidas": "🥤",
    "Laticínios": "🥛",
    "Charcutaria": "🧀",
    "Merciaria": "🍞"
};

// Dicionário para auto-categorização com base no que o utilizador escreve
const SMART_CATALOG = {
    // Frutas
    "banana": { category: "Frutas", unit: "un" },
    "bananas": { category: "Frutas", unit: "un" },
    "maca": { category: "Frutas", unit: "kg" },
    "maça": { category: "Frutas", unit: "kg" },
    "maças": { category: "Frutas", unit: "kg" },
    "laranja": { category: "Frutas", unit: "kg" },
    "laranjas": { category: "Frutas", unit: "kg" },
    "morango": { category: "Frutas", unit: "g" },
    "morangos": { category: "Frutas", unit: "g" },
    "pera": { category: "Frutas", unit: "kg" },
    "pêra": { category: "Frutas", unit: "kg" },
    "limao": { category: "Frutas", unit: "un" },
    "limão": { category: "Frutas", unit: "un" },
    "uva": { category: "Frutas", unit: "g" },
    "uvas": { category: "Frutas", unit: "g" },
    "abacaxi": { category: "Frutas", unit: "un" },
    "melancia": { category: "Frutas", unit: "un" },
    "pessego": { category: "Frutas", unit: "kg" },
    "pêssego": { category: "Frutas", unit: "kg" },
    
    // Limpeza e Higiene
    "detergente": { category: "Limpeza e Higiene", unit: "L" },
    "amaciador": { category: "Limpeza e Higiene", unit: "L" },
    "sabonete": { category: "Limpeza e Higiene", unit: "un" },
    "champo": { category: "Limpeza e Higiene", unit: "un" },
    "champô": { category: "Limpeza e Higiene", unit: "un" },
    "pasta de dentes": { category: "Limpeza e Higiene", unit: "un" },
    "escova": { category: "Limpeza e Higiene", unit: "un" },
    "papel higienico": { category: "Limpeza e Higiene", unit: "pacotes" },
    "papel higiénico": { category: "Limpeza e Higiene", unit: "pacotes" },
    "desinfetante": { category: "Limpeza e Higiene", unit: "L" },
    "esponja": { category: "Limpeza e Higiene", unit: "un" },
    "lixivia": { category: "Limpeza e Higiene", unit: "L" },
    "lixívia": { category: "Limpeza e Higiene", unit: "L" },
    "guardanapos": { category: "Limpeza e Higiene", unit: "pacotes" },
    "desodorizante": { category: "Limpeza e Higiene", unit: "un" },
    
    // Casa e Cozinha
    "vela": { category: "Casa e Cozinha", unit: "un" },
    "velas": { category: "Casa e Cozinha", unit: "un" },
    "copo": { category: "Casa e Cozinha", unit: "un" },
    "copos": { category: "Casa e Cozinha", unit: "un" },
    "prato": { category: "Casa e Cozinha", unit: "un" },
    "pratos": { category: "Casa e Cozinha", unit: "un" },
    "talher": { category: "Casa e Cozinha", unit: "un" },
    "panela": { category: "Casa e Cozinha", unit: "un" },
    "esfregona": { category: "Casa e Cozinha", unit: "un" },
    "vassoura": { category: "Casa e Cozinha", unit: "un" },
    "pilhas": { category: "Casa e Cozinha", unit: "pacotes" },
    
    // Congelados
    "pizza": { category: "Congelados", unit: "un" },
    "pizzas": { category: "Congelados", unit: "un" },
    "gelado": { category: "Congelados", unit: "un" },
    "gelados": { category: "Congelados", unit: "un" },
    "ervilhas": { category: "Congelados", unit: "g" },
    "hamburguer": { category: "Congelados", unit: "un" },
    "hambúrguer": { category: "Congelados", unit: "un" },
    "douradinhos": { category: "Congelados", unit: "pacotes" },
    "batatas fritas": { category: "Congelados", unit: "kg" },
    
    // Bebidas
    "agua": { category: "Bebidas", unit: "L" },
    "água": { category: "Bebidas", unit: "L" },
    "cerveja": { category: "Bebidas", unit: "un" },
    "cervejas": { category: "Bebidas", unit: "pacotes" },
    "vinho": { category: "Bebidas", unit: "un" },
    "sumo": { category: "Bebidas", unit: "L" },
    "sumos": { category: "Bebidas", unit: "L" },
    "coca-cola": { category: "Bebidas", unit: "un" },
    "coca cola": { category: "Bebidas", unit: "un" },
    "ice tea": { category: "Bebidas", unit: "L" },
    "icetea": { category: "Bebidas", unit: "L" },
    "refrigerante": { category: "Bebidas", unit: "L" },
    
    // Laticínios
    "leite": { category: "Laticínios", unit: "L" },
    "iogurte": { category: "Laticínios", unit: "un" },
    "iogurtes": { category: "Laticínios", unit: "pacotes" },
    "manteiga": { category: "Laticínios", unit: "un" },
    "natas": { category: "Laticínios", unit: "un" },
    "margarina": { category: "Laticínios", unit: "un" },
    "requeijao": { category: "Laticínios", unit: "un" },
    "requeijão": { category: "Laticínios", unit: "un" },
    
    // Charcutaria
    "queijo": { category: "Charcutaria", unit: "g" },
    "queijos": { category: "Charcutaria", unit: "g" },
    "presunto": { category: "Charcutaria", unit: "g" },
    "fiambre": { category: "Charcutaria", unit: "g" },
    "chourico": { category: "Charcutaria", unit: "un" },
    "chouriço": { category: "Charcutaria", unit: "un" },
    "salame": { category: "Charcutaria", unit: "g" },
    "salsicha": { category: "Charcutaria", unit: "un" },
    "salsichas": { category: "Charcutaria", unit: "latas" },
    
    // Merciaria
    "arroz": { category: "Merciaria", unit: "kg" },
    "massa": { category: "Merciaria", unit: "kg" },
    "grao": { category: "Merciaria", unit: "g" },
    "grão": { category: "Merciaria", unit: "g" },
    "feijao": { category: "Merciaria", unit: "g" },
    "feijão": { category: "Merciaria", unit: "g" },
    "azeite": { category: "Merciaria", unit: "L" },
    "oleo": { category: "Merciaria", unit: "L" },
    "óleo": { category: "Merciaria", unit: "L" },
    "sal": { category: "Merciaria", unit: "kg" },
    "acucar": { category: "Merciaria", unit: "kg" },
    "açúcar": { category: "Merciaria", unit: "kg" },
    "cafe": { category: "Merciaria", unit: "g" },
    "café": { category: "Merciaria", unit: "g" },
    "farinha": { category: "Merciaria", unit: "kg" },
    "pao": { category: "Merciaria", unit: "un" },
    "pão": { category: "Merciaria", unit: "un" },
    "bolachas": { category: "Merciaria", unit: "pacotes" },
    "atum": { category: "Merciaria", unit: "latas" },
    "cereais": { category: "Merciaria", unit: "g" }
};

// ==========================================================================
// ESTADO GLOBAL DA APLICAÇÃO
// ==========================================================================

let state = {
    items: [],
    theme: "light",
    filters: {
        status: "all",      // 'all', 'pending', 'completed'
        category: "all",    // 'all' ou nome específico da categoria
        search: ""          // string de pesquisa
    }
};

// ==========================================================================
// ELEMENTOS DO DOM
// ==========================================================================

const DOM = {
    body: document.body,
    themeToggleBtn: document.getElementById("theme-toggle-btn"),
    
    // Estatísticas
    statsCounter: document.getElementById("stats-counter"),
    statsPercentage: document.getElementById("stats-percentage"),
    statsProgressBar: document.getElementById("stats-progress-bar"),
    
    // Formulário
    addForm: document.getElementById("add-product-form"),
    prodName: document.getElementById("product-name"),
    prodQty: document.getElementById("product-quantity"),
    prodUnit: document.getElementById("product-unit"),
    prodCategory: document.getElementById("product-category"),
    qtyMinusBtn: document.getElementById("qty-minus"),
    qtyPlusBtn: document.getElementById("qty-plus"),
    autocompleteDropdown: document.getElementById("autocomplete-suggestions"),
    quickChips: document.querySelectorAll(".quick-chip"),
    
    // Pesquisa e Filtros
    searchInput: document.getElementById("search-items-input"),
    clearSearchBtn: document.getElementById("clear-search-btn"),
    filterTabs: document.querySelectorAll(".tab-btn"),
    catFiltersScroll: document.querySelector(".category-filters-scroll"),
    
    // Conteúdo da Lista
    listContainer: document.getElementById("shopping-list"),
    emptyState: document.getElementById("empty-state"),
    noResultsState: document.getElementById("no-results-state"),
    
    // Ações do Rodapé
    shareListBtn: document.getElementById("share-list-btn"),
    clearListBtn: document.getElementById("clear-list-btn"),
    
    // Modal Editar
    editModal: document.getElementById("edit-modal"),
    editForm: document.getElementById("edit-product-form"),
    editId: document.getElementById("edit-product-id"),
    editName: document.getElementById("edit-product-name"),
    editQty: document.getElementById("edit-product-quantity"),
    editUnit: document.getElementById("edit-product-unit"),
    editCategory: document.getElementById("edit-product-category"),
    closeEditModal: document.getElementById("close-edit-modal"),
    cancelEditBtn: document.getElementById("cancel-edit-btn"),
    
    // Modal Confirmar Limpeza
    clearModal: document.getElementById("clear-confirm-modal"),
    closeClearModal: document.getElementById("close-clear-modal"),
    cancelClearBtn: document.getElementById("cancel-clear-btn"),
    confirmClearBtn: document.getElementById("confirm-clear-btn"),
    
    // Toast Notificação
    toast: document.getElementById("toast-notification"),
    toastMsg: document.getElementById("toast-message")
};

// ==========================================================================
// INICIALIZAÇÃO
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    loadState();
    setupTheme();
    setupEventListeners();
    render();
});

// Carrega o estado a partir do LocalStorage
function loadState() {
    const savedItems = localStorage.getItem("superlista_items");
    const savedTheme = localStorage.getItem("superlista_theme");
    
    if (savedItems) {
        state.items = JSON.parse(savedItems);
    } else {
        // Dados de teste para demonstração inicial apelativa
        state.items = [
            { id: "1", name: "Bananas da Madeira", quantity: 5, unit: "un", category: "Frutas", completed: false },
            { id: "2", name: "Leite UHT Gordo", quantity: 6, unit: "L", category: "Laticínios", completed: false },
            { id: "3", name: "Detergente de Roupa Gel", quantity: 1, unit: "L", category: "Limpeza e Higiene", completed: true },
            { id: "4", name: "Pão Alentejano de Trigo", quantity: 2, unit: "un", category: "Merciaria", completed: false }
        ];
        saveState();
    }
    
    if (savedTheme) {
        state.theme = savedTheme;
    } else {
        // Deteta preferências do sistema operativo do utilizador
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        state.theme = prefersDark ? "dark" : "light";
    }
}

// Guarda o estado no LocalStorage
function saveState() {
    localStorage.setItem("superlista_items", JSON.stringify(state.items));
    localStorage.setItem("superlista_theme", state.theme);
}

// Configura o tema inicial na página
function setupTheme() {
    DOM.body.className = `theme-${state.theme}`;
}

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================

function setupEventListeners() {
    // Alternância do Tema Claro/Escuro
    DOM.themeToggleBtn.addEventListener("click", () => {
        state.theme = state.theme === "light" ? "dark" : "light";
        DOM.body.className = `theme-${state.theme}`;
        saveState();
        showToast(state.theme === "light" ? "Tema Claro Ativo" : "Tema Escuro Ativo");
    });

    // Controlos de Quantidade (+ e -)
    DOM.qtyMinusBtn.addEventListener("click", () => {
        let val = parseFloat(DOM.prodQty.value);
        if (val > 1) {
            DOM.prodQty.value = val - 1;
        }
    });

    DOM.qtyPlusBtn.addEventListener("click", () => {
        let val = parseFloat(DOM.prodQty.value);
        DOM.prodQty.value = val + 1;
    });

    // Auto-categorização inteligente enquanto o utilizador escreve
    DOM.prodName.addEventListener("input", (e) => {
        const text = e.target.value.toLowerCase().trim();
        handleSmartCategorization(text);
        handleAutocompleteSuggestions(text);
    });

    // Submissão do Formulário de Adição
    DOM.addForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = DOM.prodName.value.trim();
        const quantity = parseFloat(DOM.prodQty.value) || 1;
        const unit = DOM.prodUnit.value;
        const category = DOM.prodCategory.value;
        
        if (!name || !category) return;
        
        addItem(name, quantity, unit, category);
        
        // Limpa e repõe o formulário
        DOM.addForm.reset();
        DOM.prodQty.value = "1";
        DOM.prodUnit.value = "un";
        DOM.prodCategory.value = "";
        DOM.autocompleteDropdown.classList.add("hidden");
    });

    // Fechar dropdown de sugestões ao clicar fora
    document.addEventListener("click", (e) => {
        if (!DOM.prodName.contains(e.target) && !DOM.autocompleteDropdown.contains(e.target)) {
            DOM.autocompleteDropdown.classList.add("hidden");
        }
    });

    // Chips de Adição Rápida
    DOM.quickChips.forEach(chip => {
        chip.addEventListener("click", () => {
            const name = chip.getAttribute("data-name");
            const category = chip.getAttribute("data-cat");
            const unit = chip.getAttribute("data-unit");
            
            addItem(name, 1, unit, category);
            showToast(`Adicionado: ${name}`);
        });
    });

    // Filtros de Pesquisa
    DOM.searchInput.addEventListener("input", (e) => {
        state.filters.search = e.target.value;
        if (state.filters.search.length > 0) {
            DOM.clearSearchBtn.classList.remove("hidden");
        } else {
            DOM.clearSearchBtn.classList.add("hidden");
        }
        render();
    });

    DOM.clearSearchBtn.addEventListener("click", () => {
        DOM.searchInput.value = "";
        state.filters.search = "";
        DOM.clearSearchBtn.classList.add("hidden");
        render();
    });

    // Abas de Estado (Todos, Por Comprar, Comprados)
    DOM.filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            DOM.filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            state.filters.status = tab.getAttribute("data-filter");
            render();
        });
    });

    // Filtro Rápido de Categorias (Scroll Horizontal)
    setupCategoryFilterEvents();

    // Rodapé - Partilhar Lista
    DOM.shareListBtn.addEventListener("click", shareList);

    // Rodapé - Limpar Lista
    DOM.clearListBtn.addEventListener("click", () => {
        DOM.clearModal.classList.remove("hidden");
    });

    // Modais - Fechar & Cancelar Ações
    DOM.closeEditModal.addEventListener("click", () => DOM.editModal.classList.add("hidden"));
    DOM.cancelEditBtn.addEventListener("click", () => DOM.editModal.classList.add("hidden"));
    DOM.closeClearModal.addEventListener("click", () => DOM.clearModal.classList.add("hidden"));
    DOM.cancelClearBtn.addEventListener("click", () => DOM.clearModal.classList.add("hidden"));

    // Modal Editar - Submeter Alterações
    DOM.editForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const id = DOM.editId.value;
        const name = DOM.editName.value.trim();
        const quantity = parseFloat(DOM.editQty.value) || 1;
        const unit = DOM.editUnit.value;
        const category = DOM.editCategory.value;
        
        if (id && name && category) {
            updateItem(id, name, quantity, unit, category);
            DOM.editModal.classList.add("hidden");
            showToast("Item atualizado com sucesso!");
        }
    });

    // Modal Limpar - Confirmar Ação
    DOM.confirmClearBtn.addEventListener("click", () => {
        clearList();
        DOM.clearModal.classList.add("hidden");
    });
}

// Configura eventos para os botões de filtro de categoria dinâmicos
function setupCategoryFilterEvents() {
    // Captura os botões da lista horizontal
    const catBtns = DOM.catFiltersScroll.querySelectorAll(".cat-filter-btn");
    catBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            catBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.filters.category = btn.getAttribute("data-category");
            render();
        });
    });
}

// ==========================================================================
// FUNÇÕES DE LÓGICA DE CATEGORIZAÇÃO & AUTOCOMPLETE
// ==========================================================================

function handleSmartCategorization(text) {
    // Procura por correspondência direta ou por parte da palavra no catálogo inteligente
    let foundMatch = null;
    
    // Procura termo exato
    if (SMART_CATALOG[text]) {
        foundMatch = SMART_CATALOG[text];
    } else {
        // Procura se o texto contém algum dos termos chave
        for (const [key, value] of Object.entries(SMART_CATALOG)) {
            if (text.length >= 3 && (key.includes(text) || text.includes(key))) {
                foundMatch = value;
                break;
            }
        }
    }

    if (foundMatch) {
        DOM.prodCategory.value = foundMatch.category;
        DOM.prodUnit.value = foundMatch.unit;
    }
}

function handleAutocompleteSuggestions(text) {
    if (text.length < 2) {
        DOM.autocompleteDropdown.classList.add("hidden");
        return;
    }

    // Filtra itens correspondentes do catálogo
    const matches = Object.entries(SMART_CATALOG)
        .filter(([key]) => key.includes(text))
        .slice(0, 5); // Limita a 5 sugestões

    if (matches.length === 0) {
        DOM.autocompleteDropdown.classList.add("hidden");
        return;
    }

    DOM.autocompleteDropdown.innerHTML = "";
    
    matches.forEach(([key, val]) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "autocomplete-item";
        
        // Capitaliza a sugestão
        const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
        
        // Define a cor de badge da categoria
        const emoji = CATEGORIA_EMOJIS[val.category] || "📦";
        
        itemDiv.innerHTML = `
            <span>${capitalizedKey}</span>
            <span class="item-cat" style="background-color: hsl(var(--hue-${val.category.toLowerCase().replace(/ e /g, '-').replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "")}), 70%, 95%); color: hsl(var(--hue-${val.category.toLowerCase().replace(/ e /g, '-').replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "")}), 70%, 35%);">
                ${emoji} ${val.category}
            </span>
        `;
        
        itemDiv.addEventListener("click", () => {
            DOM.prodName.value = capitalizedKey;
            DOM.prodCategory.value = val.category;
            DOM.prodUnit.value = val.unit;
            DOM.autocompleteDropdown.classList.add("hidden");
            DOM.prodQty.focus();
        });
        
        DOM.autocompleteDropdown.appendChild(itemDiv);
    });

    DOM.autocompleteDropdown.classList.remove("hidden");
}

// ==========================================================================
// OPERAÇÕES CRUD NO ESTADO
// ==========================================================================

// Adiciona um novo item
function addItem(name, quantity, unit, category) {
    const newItem = {
        id: Date.now().toString(),
        name,
        quantity,
        unit,
        category,
        completed: false
    };
    
    state.items.unshift(newItem); // Adiciona ao início da lista
    saveState();
    render();
    showToast(`Adicionado: ${name}`);
}

// Edita / Atualiza um item
function updateItem(id, name, quantity, unit, category) {
    state.items = state.items.map(item => {
        if (item.id === id) {
            return { ...item, name, quantity, unit, category };
        }
        return item;
    });
    saveState();
    render();
}

// Alterna estado de conclusão (comprado)
function toggleItemCompleted(id) {
    state.items = state.items.map(item => {
        if (item.id === id) {
            const updatedState = !item.completed;
            showToast(updatedState ? `Comprado: ${item.name}` : `Reposto: ${item.name}`);
            return { ...item, completed: updatedState };
        }
        return item;
    });
    saveState();
    render();
}

// Elimina um item individual
function deleteItem(id) {
    const itemToDelete = state.items.find(item => item.id === id);
    state.items = state.items.filter(item => item.id !== id);
    saveState();
    render();
    if (itemToDelete) {
        showToast(`Removido: ${itemToDelete.name}`);
    }
}

// Limpa toda a lista de compras
function clearList() {
    state.items = [];
    saveState();
    render();
    showToast("A lista de compras foi limpa.");
}

// ==========================================================================
// FUNÇÕES AUXILIARES E DE INTERACTION DESIGNS
// ==========================================================================

// Mostra o Toast de Notificação
function showToast(message) {
    DOM.toastMsg.textContent = message;
    DOM.toast.classList.remove("hidden");
    
    // Reset do timer se já estiver visível
    if (DOM.toast.timerId) {
        clearTimeout(DOM.toast.timerId);
    }
    
    DOM.toast.timerId = setTimeout(() => {
        DOM.toast.classList.add("hidden");
    }, 2200);
}

// Abre o Modal de Edição com dados pré-preenchidos
function openEditModalWithData(id) {
    const item = state.items.find(i => i.id === id);
    if (!item) return;
    
    DOM.editId.value = item.id;
    DOM.editName.value = item.name;
    DOM.editQty.value = item.quantity;
    DOM.editUnit.value = item.unit;
    DOM.editCategory.value = item.category;
    
    DOM.editModal.classList.remove("hidden");
}

// Partilha a lista no formato de texto bonito copiado para a Área de Transferência
function shareList() {
    if (state.items.length === 0) {
        showToast("Adicione produtos primeiro!");
        return;
    }
    
    // Agrupa todos os itens ativos por categoria para o texto
    const groups = {};
    state.items.forEach(item => {
        if (!groups[item.category]) {
            groups[item.category] = [];
        }
        groups[item.category].push(item);
    });

    let shareText = "🛒 *MINHA SUPERLISTA DE COMPRAS*\n\n";
    
    Object.keys(groups).forEach(category => {
        const emoji = CATEGORIA_EMOJIS[category] || "📦";
        shareText += `*${emoji} ${category.toUpperCase()}*\n`;
        
        groups[category].forEach(item => {
            const check = item.completed ? "✅" : "⬜";
            shareText += `${check} ${item.quantity} ${item.unit} x ${item.name}\n`;
        });
        shareText += "\n";
    });
    
    const completedCount = state.items.filter(i => i.completed).length;
    const totalCount = state.items.length;
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    
    shareText += `*Progresso:* ${completedCount} de ${totalCount} comprados (${percentage}%)`;
    
    navigator.clipboard.writeText(shareText)
        .then(() => {
            showToast("Lista copiada! Cole no WhatsApp.");
        })
        .catch(err => {
            console.error("Falha ao copiar:", err);
            showToast("Erro ao partilhar.");
        });
}

// ==========================================================================
// DESENHAR / ATUALIZAR A INTERFACE (RENDER)
// ==========================================================================

function render() {
    const { status, category, search } = state.filters;
    
    // 1. Filtra itens conforme as definições de pesquisa e estado
    let filteredItems = state.items.filter(item => {
        // Filtro de estado
        const matchesStatus = 
            status === "all" || 
            (status === "pending" && !item.completed) || 
            (status === "completed" && item.completed);
            
        // Filtro de categoria
        const matchesCategory = category === "all" || item.category === category;
        
        // Filtro de pesquisa de texto
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
        
        return matchesStatus && matchesCategory && matchesSearch;
    });

    // 2. Controlar os estados vazios visuais na página
    if (state.items.length === 0) {
        DOM.emptyState.classList.remove("hidden");
        DOM.noResultsState.classList.add("hidden");
        DOM.listContainer.classList.add("hidden");
    } else if (filteredItems.length === 0) {
        DOM.emptyState.classList.add("hidden");
        DOM.noResultsState.classList.remove("hidden");
        DOM.listContainer.classList.add("hidden");
    } else {
        DOM.emptyState.classList.add("hidden");
        DOM.noResultsState.classList.add("hidden");
        DOM.listContainer.classList.remove("hidden");
    }

    // 3. Renderiza a lista de produtos (agrupados por categoria)
    renderListItems(filteredItems);

    // 4. Atualiza os contadores e a barra de progresso no topo
    updateStatistics();
}

function renderListItems(itemsList) {
    DOM.listContainer.innerHTML = "";
    
    // Agrupa os itens da lista atual pelas categorias reais
    const groupedItems = {};
    itemsList.forEach(item => {
        if (!groupedItems[item.category]) {
            groupedItems[item.category] = [];
        }
        groupedItems[item.category].push(item);
    });

    // Ordena as categorias alfabeticamente para um layout limpo
    const sortedCategories = Object.keys(groupedItems).sort();
    
    sortedCategories.forEach(category => {
        const categoryBlock = document.createElement("div");
        categoryBlock.className = "category-group-block";
        categoryBlock.setAttribute("data-category", category);
        
        // Configura o cabeçalho do grupo de categoria
        const emoji = CATEGORIA_EMOJIS[category] || "📦";
        const totalItemsInGroup = groupedItems[category].length;
        const boughtItemsInGroup = groupedItems[category].filter(i => i.completed).length;
        
        const catHeader = document.createElement("div");
        catHeader.className = "category-header";
        catHeader.innerHTML = `
            <div class="category-title">
                <span class="category-icon">${emoji}</span>
                <span>${category}</span>
            </div>
            <span class="category-count">${boughtItemsInGroup}/${totalItemsInGroup}</span>
        `;
        categoryBlock.appendChild(catHeader);
        
        // Contentor para os cards
        const itemsListWrapper = document.createElement("div");
        itemsListWrapper.className = "category-items-list";
        
        // Cria cards individuais para cada item nesta categoria
        groupedItems[category].forEach(item => {
            const card = document.createElement("div");
            card.className = `product-item-card ${item.completed ? 'completed' : ''}`;
            
            // Render de número formatado com unidade
            const qtyText = `${item.quantity} ${item.unit}`;
            
            card.innerHTML = `
                <div class="card-left">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" ${item.completed ? 'checked' : ''} data-id="${item.id}" class="item-chk">
                        <span class="custom-checkbox">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </span>
                    </label>
                    <div class="item-details" data-id="${item.id}">
                        <span class="item-name" title="${item.name}">${item.name}</span>
                        <span class="item-qty">${qtyText}</span>
                    </div>
                </div>
                <div class="card-actions">
                    <button class="action-btn btn-edit" data-id="${item.id}" aria-label="Editar item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </button>
                    <button class="action-btn btn-delete" data-id="${item.id}" aria-label="Eliminar item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </div>
            `;
            
            // Vincula ações específicas de conclusão nas áreas do card
            const checkbox = card.querySelector(".item-chk");
            checkbox.addEventListener("change", () => toggleItemCompleted(item.id));
            
            // Permite marcar clicando no nome e detalhes (experiência móvel facilitada)
            const detailsArea = card.querySelector(".item-details");
            detailsArea.addEventListener("click", () => toggleItemCompleted(item.id));
            
            // Botão Editar
            const editBtn = card.querySelector(".btn-edit");
            editBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                openEditModalWithData(item.id);
            });
            
            // Botão Eliminar com animação de slide-out e remoção do DOM
            const deleteBtn = card.querySelector(".btn-delete");
            deleteBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                
                // Transição de exclusão suave antes da eliminação física
                card.style.transform = "translateX(100px)";
                card.style.opacity = "0";
                card.style.transition = "transform 0.3s ease, opacity 0.3s ease";
                
                setTimeout(() => {
                    deleteItem(item.id);
                }, 300);
            });

            itemsListWrapper.appendChild(card);
        });
        
        categoryBlock.appendChild(itemsListWrapper);
        DOM.listContainer.appendChild(categoryBlock);
    });
}

function updateStatistics() {
    const totalCount = state.items.length;
    const completedCount = state.items.filter(item => item.completed).length;
    
    // Contagem textual
    DOM.statsCounter.textContent = `${completedCount} de ${totalCount} itens`;
    
    // Percentagem textual
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    DOM.statsPercentage.textContent = `${percentage}% comprado`;
    
    // Barra de progresso visual com lag natural na transição CSS
    DOM.statsProgressBar.style.width = `${percentage}%`;
    
    // Desativa ações globais se a lista estiver totalmente vazia
    if (totalCount === 0) {
        DOM.shareListBtn.disabled = true;
        DOM.shareListBtn.style.opacity = "0.5";
        DOM.shareListBtn.style.pointerEvents = "none";
        
        DOM.clearListBtn.disabled = true;
        DOM.clearListBtn.style.opacity = "0.5";
        DOM.clearListBtn.style.pointerEvents = "none";
    } else {
        DOM.shareListBtn.disabled = false;
        DOM.shareListBtn.style.opacity = "1";
        DOM.shareListBtn.style.pointerEvents = "auto";
        
        DOM.clearListBtn.disabled = false;
        DOM.clearListBtn.style.opacity = "1";
        DOM.clearListBtn.style.pointerEvents = "auto";
    }
}
