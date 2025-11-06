// Load data
let inventory = JSON.parse(localStorage.getItem("inventory")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

const productSelect = document.getElementById("productSelect");
const form = document.getElementById("orderForm");
const table = document.getElementById("orderTable");


function loadProducts() {
    productSelect.innerHTML = '<option value="">Select Product</option>';
    inventory.forEach((item, index) => {
        if (item.quantity > 0) {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = `${item.name} (${item.quantity} in stock)`;
            productSelect.appendChild(option);
        }
    });
}


function renderOrders() {
    table.innerHTML = "";
    orders.forEach((order, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${index + 1}</td>
      <td>${order.customer}</td>
      <td>${order.product}</td>
      <td>${order.quantity}</td>
      <td>$${order.price.toFixed(2)}</td>
      <td>$${(order.quantity * order.price).toFixed(2)}</td>
      <td>${order.date}</td>
      <td><button class="action-btn delete-btn" onclick="deleteOrder(${index})">Delete</button></td>
    `;
        table.appendChild(row);
    });
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const customer = document.getElementById("customerName").value.trim();
    const productIndex = parseInt(productSelect.value);
    const quantity = parseInt(document.getElementById("orderQuantity").value);

    if (isNaN(productIndex) || isNaN(quantity) || !customer) {
        alert("Please fill out all fields.");
        return;
    }

    const product = inventory[productIndex];

    if (quantity > product.quantity) {
        alert("Not enough stock available!");
        return;
    }

    // Reduce stock in inventory
    inventory[productIndex].quantity -= quantity;
    localStorage.setItem("inventory", JSON.stringify(inventory));

    // Create order object
    const order = {
        customer,
        product: product.name,
        quantity,
        price: product.price,
        date: new Date().toLocaleDateString()
    };

    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    form.reset();
    loadProducts();
    renderOrders();
});

// Delete order
function deleteOrder(index) {
    if (confirm("Are you sure you want to delete this order?")) {
        orders.splice(index, 1);
        localStorage.setItem("orders", JSON.stringify(orders));
        renderOrders();
    }
}

// Initialize
loadProducts();
renderOrders();
