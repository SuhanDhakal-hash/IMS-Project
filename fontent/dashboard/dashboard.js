// Inventory data array
let inventory = [
    { name: "Printer Ink", category: "Office", quantity: 8, reorder: 10, price: 15 },
    { name: "Paper Ream", category: "Office", quantity: 0, reorder: 5, price: 6 },
    { name: "Monitor", category: "Electronics", quantity: 25, reorder: 10, price: 120 }
];

// Elements
const tbody = document.querySelector("#inventoryTable tbody");
const stockValueEl = document.getElementById("stockValue");
const totalItemsEl = document.getElementById("totalItems");
const lowStockEl = document.getElementById("lowStock");
const outStockEl = document.getElementById("outStock");
const searchInput = document.getElementById("search");
const modal = document.getElementById("itemModal");
const form = document.getElementById("itemForm");
const addItemBtn = document.getElementById("addItemBtn");
const cancelBtn = document.getElementById("cancelBtn");
const toggleDark = document.getElementById("toggleDark");
const editIndex = document.getElementById("editIndex");
const modalTitle = document.getElementById("modalTitle");

// CHART
const ctx = document.getElementById("categoryChart").getContext("2d");
let categoryChart = new Chart(ctx, {
    type: "doughnut",
    data: { labels: [], datasets: [{ data: [], backgroundColor: ["#3b82f6", "#22c55e", "#f97316", "#a855f7"] }] },
    options: { plugins: { legend: { position: "bottom" } } }
});

// ---------------- FUNCTIONS ----------------
function renderTable() {
    tbody.innerHTML = "";
    inventory.forEach((item, i) => {
        const status = item.quantity === 0 ? "out" : item.quantity <= item.reorder ? "low" : "ok";
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.category}</td>
      <td>${item.quantity}</td>
      <td>${item.reorder}</td>
      <td>$${item.price}</td>
      <td class="${status}">${status === "ok" ? "In Stock" : status === "low" ? "Low" : "Out"}</td>
      <td class="actions">
        <button onclick="editItem(${i})">✏️</button>
        <button onclick="deleteItem(${i})">🗑️</button>
      </td>
    `;
        tbody.appendChild(tr);
    });
    updateKPI();
    updateChart();
}

function updateKPI() {
    const totalValue = inventory.reduce((sum, i) => sum + i.quantity * i.price, 0);
    const totalItems = inventory.length;
    const low = inventory.filter(i => i.quantity <= i.reorder && i.quantity > 0).length;
    const out = inventory.filter(i => i.quantity === 0).length;

    stockValueEl.textContent = `$${totalValue.toLocaleString()}`;
    totalItemsEl.textContent = totalItems;
    lowStockEl.textContent = low;
    outStockEl.textContent = out;
}

function updateChart() {
    const categories = {};
    inventory.forEach(i => {
        categories[i.category] = (categories[i.category] || 0) + i.quantity;
    });

    categoryChart.data.labels = Object.keys(categories);
    categoryChart.data.datasets[0].data = Object.values(categories);
    categoryChart.update();
}

// CRUD OPERATIONS
addItemBtn.onclick = () => {
    modalTitle.textContent = "Add Item";
    form.reset();
    editIndex.value = "";
    modal.classList.remove("hidden");
};

cancelBtn.onclick = () => modal.classList.add("hidden");

form.onsubmit = (e) => {
    e.preventDefault();
    const newItem = {
        name: document.getElementById("productName").value,
        category: document.getElementById("category").value,
        quantity: +document.getElementById("quantity").value,
        reorder: +document.getElementById("reorder").value,
        price: +document.getElementById("price").value
    };

    if (editIndex.value !== "") {
        inventory[editIndex.value] = newItem;
    } else {
        inventory.push(newItem);
    }
    modal.classList.add("hidden");
    renderTable();
};

window.editItem = (i) => {
    modalTitle.textContent = "Edit Item";
    const item = inventory[i];
    document.getElementById("productName").value = item.name;
    document.getElementById("category").value = item.category;
    document.getElementById("quantity").value = item.quantity;
    document.getElementById("reorder").value = item.reorder;
    document.getElementById("price").value = item.price;
    editIndex.value = i;
    modal.classList.remove("hidden");
};

window.deleteItem = (i) => {
    if (confirm("Delete this item?")) {
        inventory.splice(i, 1);
        renderTable();
    }
};

// Search filter
searchInput.addEventListener("input", e => {
    const filter = e.target.value.toLowerCase();
    [...tbody.rows].forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(filter) ? "" : "none";
    });
});

// Dark Mode toggle
toggleDark.onclick = () => {
    document.body.classList.toggle("dark");
    toggleDark.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
};

// INIT
renderTable();
