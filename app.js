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

const SMART_CATALOG = {
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
    "pizza": { category: "Congelados", unit: "un" },
    "pizzas": { category: "Congelados", unit: "un" },
    "gelado": { category: "Congelados", unit: "un" },
    "gelados": { category: "Congelados", unit: "un" },
    "ervilhas": { category: "Congelados", unit: "g" },
    "hamburguer": { category: "Congelados", unit: "un" },
    "hambúrguer": { category: "Congelados", unit: "un" },
    "douradinhos": { category: "Congelados", unit: "pacotes" },
    "batatas fritas": { category: "Congelados", unit: "kg" },
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
    "refrigerante": { category: "Bebidas", unit: "L" },
    "leite": { category: "Laticínios", unit: "L" },
    "iogurte": { category: "Laticínios", unit: "un" },
    "iogurtes": { category: "Laticínios", unit: "pacotes" },
    "manteiga": { category: "Laticínios", unit: "un" },
    "natas": { category: "Laticínios", unit: "un" },
    "margarina": { category: "Laticínios", unit: "un" },
    "requeijao": { category: "Laticínios", unit: "un" },
    "requeijão": { category: "Laticínios", unit: "un" },
    "queijo": { category: "Charcutaria", unit: "g" },
    "queijos": { category: "Charcutaria", unit: "g" },
    "presunto": { category: "Charcutaria", unit: "g" },
    "fiambre": { category: "Charcutaria", unit: "g" },
    "chourico": { category: "Charcutaria", unit: "un" },
    "chouriço": { category: "Charcutaria", unit: "un" },
    "salame": { category: "Charcutaria", unit: "g" },
    "salsicha": { category: "Charcutaria", unit: "un" },
    "salsichas": { category: "Charcutaria", unit: "latas" },
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
        status: "all",
        category: "all",
        search: ""
    },
    syncCode: null,
    syncIntervalId: null
};

// ==========================================================================
// ELEMENTOS DO DOM
// ==========================================================================

const DOM = {
    body: document.body,
    themeToggleBtn: document.getElementById("theme-toggle-btn"),
    statsCounter: document.getElementById("stats-counter"),
    statsPercentage: document.getElementById("stats-percentage"),
    statsProgressBar: document.getElementById("stats-progress-bar"),
    addForm: document.getElementById("add-product-form"),
    prodName: document.getElementById("product-name"),
    prodQty: document.getElementById("product-quantity"),
    prodUnit: document.getElementById("product-unit"),
    prodCategory: document.getElementById("product-category"),
    qtyMinusBtn: document.getElementById("qty-minus"),
    qtyPlusBtn: document.getElementById("qty-plus"),
    autocompleteDropdown: document.getElementById("autocomplete-suggestions"),
    quickChips: document.querySelectorAll(".quick-chip"),
    searchInput: document.getElementById("search-items-input"),
    clearSearchBtn: document.getElementById("clear-search-btn"),
    filterTabs: document.querySelectorAll(".tab-btn"),
    catFiltersScroll: document.querySelector(".category-filters-scroll"),
    listContainer: document.getElementById("shopping-list"),
    emptyState: document.getElementById("empty-state"),
    noResultsState: document.getElementById("no-results-state"),
    shareListBtn: document.getElementById("share-list-btn"),
    clearListBtn: document.getElementById("clear-list-btn"),
    editModal: document.getElementById("edit-modal"),
    editForm: document.getElementById("edit-product-form"),
    editId: document.getElementById("edit-product-id"),
    editName: document.getElementById("edit-product-name"),
    editQty: document.getElementById("edit-product-quantity"),
    editUnit: document.getElementById("edit-product-unit"),
    editCategory: document.getElementById("edit-product-category"),
    closeEditModal: document.getElementById("close-edit-modal"),
    cancelEditBtn: document.getElementById("cancel-edit-btn"),
    clearModal: document.getElementById("clear-confirm-modal"),
    closeClearModal: document.getElementById("close-clear-modal"),
    cancelClearBtn: document.getElementById("cancel-clear-btn"),
    confirmClearBtn: document.getElementById("confirm-clear-btn"),
    toast: document.getElementById("toast-notification"),
    toastMsg: document.getElementById("toast-message"),
    // Painel de Nuvem
    syncDot: document.getElementById("sync-dot"),
    syncStatusText: document.getElementById("sync-status-text"),
    toggleSyncPanelBtn: document.getElementById("toggle-sync-panel-btn"),
    syncExpandedContent: document.getElementById("sync-expanded-content"),
    syncOfflineControls: document.getElementById("sync-offline-controls"),
    createCloudListBtn: document.getElementById("create-cloud-list-btn"),
    showJoinInputBtn: document.getElementById("show-join-input-btn"),
    joinInputWrapper: document.getElementById("join-input-wrapper"),
    joinListCode: document.getElementById("join-list-code"),
    confirmJoinBtn: document.getElementById("confirm-join-btn"),
    syncOnlineControls: document.getElementById("sync-online-controls"),
    activeListCode: document.getElementById("active-list-code"),
    copyShareLinkBtn: document.getElementById("copy-share-link-btn"),
    disconnectSyncBtn: document.getElementById("disconnect-sync-btn")
};

// ==========================================================================
// INICIALIZAÇÃO
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    loadState();
    setupTheme();
    setupEventListeners();
    setupCloudSync();
    render();
});

function loadState() {
    const savedItems = localStorage.getItem("superlista_items");
    const savedTheme = localStorage.getItem("superlista_theme");
    const savedSyncCode = localStorage.getItem("superlista_synccode");

    if (savedItems) {
        state.items = JSON.parse(savedItems);
    } else {
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
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        state.theme = prefersDark ? "dark" : "light";
    }

    if (savedSyncCode) {
        state.syncCode = savedSyncCode;
    }
}

function saveState() {
    localStorage.setItem("superlista_items", JSON.stringify(state.items));
    localStorage.setItem("superlista_theme", state.theme);
    if (state.syncCode) {
        localStorage.setItem("superlista_synccode", state.syncCode);
    } else {
        localStorage.removeItem("superlista_synccode");
    }
}

function setupTheme() {
    DOM.body.className = `theme-${state.theme}`;
}

// ==========================================================================
// EVENT LISTENERS
// ==========================================================================

function setupEventListeners() {
    DOM.themeToggleBtn.addEventListener("click", () => {
        state.theme = state.theme === "light" ? "dark" : "light";
        DOM.body.className = `theme-${state.theme}`;
        saveState();
        showToast(state.theme === "light" ? "Tema Claro Ativo" : "Tema Escuro Ativo");
    });

    DOM.qtyMinusBtn.addEventListener("click", () => {
        let val = parseFloat(DOM.prodQty.value);
        if (val > 1) DOM.prodQty.value = val - 1;
    });

    DOM.qtyPlusBtn.addEventListener("click", () => {
        DOM.prodQty.value = parseFloat(DOM.prodQty.value) + 1;
    });

    DOM.prodName.addEventListener("input", (e) => {
        const text = e.target.value.toLowerCase().trim();
        handleSmartCategorization(text);
        handleAutocompleteSuggestions(text);
    });

    DOM.addForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = DOM.prodName.value.trim();
        const quantity = parseFloat(DOM.prodQty.value) || 1;
        const unit = DOM.prodUnit.value;
        const category = DOM.prodCategory.value;
        if (!name || !category) return;
        addItem(name, quantity, unit, category);
        DOM.addForm.reset();
        DOM.prodQty.value = "1";
        DOM.prodUnit.value = "un";
        DOM.prodCategory.value = "";
        DOM.autocompleteDropdown.classList.add("hidden");
    });

    document.addEventListener("click", (e) => {
        if (!DOM.prodName.contains(e.target) && !DOM.autocompleteDropdown.contains(e.target)) {
            DOM.autocompleteDropdown.classList.add("hidden");
        }
    });

    DOM.quickChips.forEach(chip => {
        chip.addEventListener("click", () => {
            const name = chip.getAttribute("data-name");
            const category = chip.getAttribute("data-cat");
            const unit = chip.getAttribute("data-unit");
            addItem(name, 1, unit, category);
        });
    });

    DOM.searchInput.addEventListener("input", (e) => {
        state.filters.search = e.target.value;
        DOM.clearSearchBtn.classList.toggle("hidden", state.filters.search.length === 0);
        render();
    });

    DOM.clearSearchBtn.addEventListener("click", () => {
        DOM.searchInput.value = "";
        state.filters.search = "";
        DOM.clearSearchBtn.classList.add("hidden");
        render();
    });

    DOM.filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            DOM.filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            state.filters.status = tab.getAttribute("data-filter");
            render();
        });
    });

    setupCategoryFilterEvents();

    DOM.shareListBtn.addEventListener("click", shareList);

    DOM.clearListBtn.addEventListener("click", () => {
        DOM.clearModal.classList.remove("hidden");
    });

    DOM.closeEditModal.addEventListener("click", () => DOM.editModal.classList.add("hidden"));
    DOM.cancelEditBtn.addEventListener("click", () => DOM.editModal.classList.add("hidden"));
    DOM.closeClearModal.addEventListener("click", () => DOM.clearModal.classList.add("hidden"));
    DOM.cancelClearBtn.addEventListener("click", () => DOM.clearModal.classList.add("hidden"));

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

    DOM.confirmClearBtn.addEventListener("click", () => {
        clearList();
        DOM.clearModal.classList.add("hidden");
    });

    // Painel de Nuvem
    DOM.toggleSyncPanelBtn.addEventListener("click", () => {
        DOM.syncExpandedContent.classList.toggle("hidden");
        DOM.toggleSyncPanelBtn.textContent = DOM.syncExpandedContent.classList.contains("hidden")
            ? "Configurar Nuvem" : "Fechar Painel";
    });

    DOM.showJoinInputBtn.addEventListener("click", () => {
        DOM.joinInputWrapper.classList.toggle("hidden");
    });

    DOM.createCloudListBtn.addEventListener("click", generateAndCreateCloudList);
    DOM.confirmJoinBtn.addEventListener("click", () => {
        const code = DOM.joinListCode.value.trim();
        if (code) joinCloudList(code);
    });
    DOM.copyShareLinkBtn.addEventListener("click", copyCloudShareLink);
    DOM.disconnectSyncBtn.addEventListener("click", disconnectCloudSync);
}

function setupCategoryFilterEvents() {
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
// AUTO-CATEGORIZAÇÃO & AUTOCOMPLETE
// ==========================================================================

function handleSmartCategorization(text) {
    let foundMatch = null;
    if (SMART_CATALOG[text]) {
        foundMatch = SMART_CATALOG[text];
    } else {
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
    const matches = Object.entries(SMART_CATALOG).filter(([key]) => key.includes(text)).slice(0, 5);
    if (matches.length === 0) {
        DOM.autocompleteDropdown.classList.add("hidden");
        return;
    }
    DOM.autocompleteDropdown.innerHTML = "";
    matches.forEach(([key, val]) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "autocomplete-item";
        const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
        const emoji = CATEGORIA_EMOJIS[val.category] || "📦";
        itemDiv.innerHTML = `<span>${capitalizedKey}</span><span class="item-cat">${emoji} ${val.category}</span>`;
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
// CRUD
// ==========================================================================

function addItem(name, quantity, unit, category) {
    const newItem = { id: Date.now().toString(), name, quantity, unit, category, completed: false };
    state.items.unshift(newItem);
    saveState();
    render();
    showToast(`Adicionado: ${name}`);
    pushCloudItems();
}

function updateItem(id, name, quantity, unit, category) {
    state.items = state.items.map(item => item.id === id ? { ...item, name, quantity, unit, category } : item);
    saveState();
    render();
    pushCloudItems();
}

function toggleItemCompleted(id) {
    state.items = state.items.map(item => {
        if (item.id === id) {
            const done = !item.completed;
            showToast(done ? `Comprado: ${item.name}` : `Reposto: ${item.name}`);
            return { ...item, completed: done };
        }
        return item;
    });
    saveState();
    render();
    pushCloudItems();
}

function deleteItem(id) {
    const itemToDelete = state.items.find(item => item.id === id);
    state.items = state.items.filter(item => item.id !== id);
    saveState();
    render();
    if (itemToDelete) showToast(`Removido: ${itemToDelete.name}`);
    pushCloudItems();
}

function clearList() {
    state.items = [];
    saveState();
    render();
    showToast("A lista de compras foi limpa.");
    pushCloudItems();
}

// ==========================================================================
// AUXILIARES
// ==========================================================================

function showToast(message) {
    DOM.toastMsg.textContent = message;
    DOM.toast.classList.remove("hidden");
    if (DOM.toast.timerId) clearTimeout(DOM.toast.timerId);
    DOM.toast.timerId = setTimeout(() => DOM.toast.classList.add("hidden"), 2200);
}

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

function shareList() {
    if (state.items.length === 0) { showToast("Adicione produtos primeiro!"); return; }
    const groups = {};
    state.items.forEach(item => {
        if (!groups[item.category]) groups[item.category] = [];
        groups[item.category].push(item);
    });
    let shareText = "🛒 *MINHA SUPERLISTA DE COMPRAS*\n\n";
    Object.keys(groups).forEach(category => {
        const emoji = CATEGORIA_EMOJIS[category] || "📦";
        shareText += `*${emoji} ${category.toUpperCase()}*\n`;
        groups[category].forEach(item => {
            shareText += `${item.completed ? "✅" : "⬜"} ${item.quantity} ${item.unit} x ${item.name}\n`;
        });
        shareText += "\n";
    });
    const completedCount = state.items.filter(i => i.completed).length;
    const totalCount = state.items.length;
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    shareText += `*Progresso:* ${completedCount} de ${totalCount} comprados (${percentage}%)`;
    navigator.clipboard.writeText(shareText)
        .then(() => showToast("Lista copiada! Cole no WhatsApp."))
        .catch(() => showToast("Erro ao partilhar."));
}

// ==========================================================================
// RENDER
// ==========================================================================

function render() {
    const { status, category, search } = state.filters;
    let filteredItems = state.items.filter(item => {
        const matchesStatus = status === "all" || (status === "pending" && !item.completed) || (status === "completed" && item.completed);
        const matchesCategory = category === "all" || item.category === category;
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
        return matchesStatus && matchesCategory && matchesSearch;
    });

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

    renderListItems(filteredItems);
    updateStatistics();
}

function renderListItems(itemsList) {
    DOM.listContainer.innerHTML = "";
    const groupedItems = {};
    itemsList.forEach(item => {
        if (!groupedItems[item.category]) groupedItems[item.category] = [];
        groupedItems[item.category].push(item);
    });
    const sortedCategories = Object.keys(groupedItems).sort();
    sortedCategories.forEach(category => {
        const categoryBlock = document.createElement("div");
        categoryBlock.className = "category-group-block";
        categoryBlock.setAttribute("data-category", category);
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
        const itemsListWrapper = document.createElement("div");
        itemsListWrapper.className = "category-items-list";
        groupedItems[category].forEach(item => {
            const card = document.createElement("div");
            card.className = `product-item-card ${item.completed ? "completed" : ""}`;
            const qtyText = `${item.quantity} ${item.unit}`;
            card.innerHTML = `
                <div class="card-left">
                    <label class="checkbox-wrapper">
                        <input type="checkbox" ${item.completed ? "checked" : ""} class="item-chk">
                        <span class="custom-checkbox">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </span>
                    </label>
                    <div class="item-details">
                        <span class="item-name" title="${item.name}">${item.name}</span>
                        <span class="item-qty">${qtyText}</span>
                    </div>
                </div>
                <div class="card-actions">
                    <button class="action-btn btn-edit" aria-label="Editar item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125" />
                        </svg>
                    </button>
                    <button class="action-btn btn-delete" aria-label="Eliminar item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </div>
            `;
            card.querySelector(".item-chk").addEventListener("change", () => toggleItemCompleted(item.id));
            card.querySelector(".item-details").addEventListener("click", () => toggleItemCompleted(item.id));
            card.querySelector(".btn-edit").addEventListener("click", (e) => {
                e.stopPropagation();
                openEditModalWithData(item.id);
            });
            card.querySelector(".btn-delete").addEventListener("click", (e) => {
                e.stopPropagation();
                card.style.transform = "translateX(100px)";
                card.style.opacity = "0";
                card.style.transition = "transform 0.3s ease, opacity 0.3s ease";
                setTimeout(() => deleteItem(item.id), 300);
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
    DOM.statsCounter.textContent = `${completedCount} de ${totalCount} itens`;
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    DOM.statsPercentage.textContent = `${percentage}% comprado`;
    DOM.statsProgressBar.style.width = `${percentage}%`;
    const hasItems = totalCount > 0;
    DOM.shareListBtn.disabled = !hasItems;
    DOM.shareListBtn.style.opacity = hasItems ? "1" : "0.5";
    DOM.shareListBtn.style.pointerEvents = hasItems ? "auto" : "none";
    DOM.clearListBtn.disabled = !hasItems;
    DOM.clearListBtn.style.opacity = hasItems ? "1" : "0.5";
    DOM.clearListBtn.style.pointerEvents = hasItems ? "auto" : "none";
}

// ==========================================================================
// SINCRONIZAÇÃO EM NUVEM
// API: ExtendsClass JSON Storage — sem conta, sem verificação de email
// ==========================================================================

const CLOUD_API_BASE = "https://extendsclass.com/api/json-storage/bin/";

function setupCloudSync() {
    // Lê código da URL (?lista=XXXXXX) — tem prioridade sobre o localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const listaParam = urlParams.get("lista");
    if (listaParam) {
        state.syncCode = listaParam.trim();
        saveState();
    }

    if (state.syncCode) {
        startCloudPolling();
        updateCloudUI(true);
    } else {
        updateCloudUI(false);
    }
}

function startCloudPolling() {
    stopCloudPolling();
    fetchCloudItems();
    state.syncIntervalId = setInterval(fetchCloudItems, 8000);
}

function stopCloudPolling() {
    if (state.syncIntervalId) {
        clearInterval(state.syncIntervalId);
        state.syncIntervalId = null;
    }
}

function updateCloudUI(expand = false) {
    if (state.syncCode) {
        DOM.syncDot.className = "sync-dot dot-online";
        DOM.syncStatusText.textContent = `Nuvem Ativa: ${state.syncCode}`;
        DOM.syncOfflineControls.classList.add("hidden");
        DOM.syncOnlineControls.classList.remove("hidden");
        DOM.activeListCode.textContent = state.syncCode;
    } else {
        DOM.syncDot.className = "sync-dot dot-offline";
        DOM.syncStatusText.textContent = "Lista Local (Apenas neste dispositivo)";
        DOM.syncOfflineControls.classList.remove("hidden");
        DOM.syncOnlineControls.classList.add("hidden");
        DOM.activeListCode.textContent = "------";
        DOM.joinListCode.value = "";
        DOM.joinInputWrapper.classList.add("hidden");
    }
    if (expand) {
        DOM.syncExpandedContent.classList.remove("hidden");
        DOM.toggleSyncPanelBtn.textContent = "Fechar Painel";
    }
}

// GET — puxa a lista da nuvem
function fetchCloudItems() {
    if (!state.syncCode) return;

    fetch(`${CLOUD_API_BASE}${state.syncCode}`)
        .then(response => {
            if (!response.ok) throw new Error("HTTP " + response.status);
            return response.json();
        })
        .then(data => {
            // ExtendsClass devolve { data: [...] }
            const cloudItems = Array.isArray(data) ? data : (Array.isArray(data.data) ? data.data : []);

            DOM.syncDot.className = "sync-dot dot-online";
            DOM.syncStatusText.textContent = `Nuvem Sincronizada: ${state.syncCode}`;

            // Só re-renderiza se houver diferenças reais
            if (JSON.stringify(state.items) !== JSON.stringify(cloudItems)) {
                state.items = cloudItems;
                localStorage.setItem("superlista_items", JSON.stringify(state.items));
                render();
            }
        })
        .catch(err => {
            console.warn("Sync falhou:", err.message);
            DOM.syncDot.className = "sync-dot dot-connecting";
            DOM.syncStatusText.textContent = `Ligação instável... (${state.syncCode})`;
        });
}

// PATCH — envia alterações para a nuvem
function pushCloudItems() {
    if (!state.syncCode) return;

    DOM.syncDot.className = "sync-dot dot-connecting";
    DOM.syncStatusText.textContent = "A guardar na nuvem...";

    fetch(`${CLOUD_API_BASE}${state.syncCode}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state.items)
    })
    .then(response => {
        if (!response.ok) throw new Error("HTTP " + response.status);
        DOM.syncDot.className = "sync-dot dot-online";
        DOM.syncStatusText.textContent = `Nuvem Sincronizada: ${state.syncCode}`;
    })
    .catch(err => {
        console.error("Falha ao enviar:", err);
        DOM.syncDot.className = "sync-dot dot-connecting";
        DOM.syncStatusText.textContent = `Erro a guardar... (${state.syncCode})`;
    });
}

// POST — cria um novo bin na API e obtém o ID único
function generateAndCreateCloudList() {
    DOM.syncDot.className = "sync-dot dot-connecting";
    DOM.syncStatusText.textContent = "A criar lista na nuvem...";
    DOM.createCloudListBtn.disabled = true;
    DOM.createCloudListBtn.querySelector("span").textContent = "A criar...";

    fetch("https://extendsclass.com/api/json-storage/bin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state.items)
    })
    .then(response => {
        if (!response.ok) throw new Error("HTTP " + response.status);
        return response.json();
    })
    .then(result => {
        // result = { status: 0, uri: "...bin/XXXXXXX", id: "XXXXXXX" }
        const binId = result.id || result.uri.split("/").pop();

        state.syncCode = binId;
        saveState();
        updateCloudUI(true);

        const newUrl = `${location.protocol}//${location.host}${location.pathname}?lista=${binId}`;
        history.pushState({}, "", newUrl);

        showToast(`Lista criada na Nuvem! Código: ${binId}`);
        startCloudPolling();
    })
    .catch(err => {
        console.error("Erro ao criar:", err);
        DOM.syncDot.className = "sync-dot dot-offline";
        DOM.syncStatusText.textContent = "Lista Local (Apenas neste dispositivo)";
        showToast("Erro ao criar lista na nuvem. Tente novamente.");
    })
    .finally(() => {
        DOM.createCloudListBtn.disabled = false;
        DOM.createCloudListBtn.querySelector("span").textContent = "Criar Lista na Nuvem";
    });
}

// Liga-se a uma lista existente pelo código/ID do bin
function joinCloudList(code) {
    const cleanCode = code.trim();
    if (cleanCode.length < 5) {
        showToast("Código inválido!");
        return;
    }

    DOM.syncDot.className = "sync-dot dot-connecting";
    DOM.syncStatusText.textContent = "A carregar lista...";

    fetch(`${CLOUD_API_BASE}${cleanCode}`)
        .then(response => {
            if (!response.ok) throw new Error("HTTP " + response.status);
            return response.json();
        })
        .then(data => {
            const cloudItems = Array.isArray(data) ? data : (Array.isArray(data.data) ? data.data : []);

            state.syncCode = cleanCode;
            state.items = cloudItems;
            saveState();
            render();
            updateCloudUI(true);

            const newUrl = `${location.protocol}//${location.host}${location.pathname}?lista=${cleanCode}`;
            history.pushState({}, "", newUrl);

            showToast(`Ligado à lista: ${cleanCode}`);
            startCloudPolling();
        })
        .catch(err => {
            console.error("Erro ao ligar:", err);
            DOM.syncDot.className = "sync-dot dot-offline";
            DOM.syncStatusText.textContent = "Lista Local (Apenas neste dispositivo)";
            showToast("Código não encontrado. Verifique e tente novamente.");
        });
}

// Desliga a nuvem e regressa ao modo local
function disconnectCloudSync() {
    stopCloudPolling();
    state.syncCode = null;
    saveState();
    history.pushState({}, "", `${location.protocol}//${location.host}${location.pathname}`);
    updateCloudUI(false);
    render();
    showToast("Nuvem desativada. Lista local ativa.");
}

// Copia o link de partilha para a área de transferência
function copyCloudShareLink() {
    if (!state.syncCode) return;
    const shareUrl = `${location.protocol}//${location.host}${location.pathname}?lista=${state.syncCode}`;
    navigator.clipboard.writeText(shareUrl)
        .then(() => showToast("Link de sincronização copiado!"))
        .catch(() => showToast("Erro ao copiar link."));
}
