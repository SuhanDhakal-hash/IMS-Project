// Load existing products or initialize empty list
let products = JSON.parse(localStorage.getItem("products")) || [];

const form = document.getElementById("productForm");
const tableBody = document.getElementById("productTable");
const searchBar = document.getElementById("searchBar");

// Render product table
function renderProducts(filter = "") {
    tableBody.innerHTML = "";
    products
        .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach((product, index) => {
            const row = document.createElement("tr");

            if (product.quantity < 5) row.classList.add("low-stock");

            row.innerHTML = `
        <td>${index + 1}</td>
        <td>${product.name}</td>
        <td>${product.category}</td>
        <td>${product.quantity}</td>
        <td>$${product.price.toFixed(2)}</td>
        <td>$${(product.quantity * product.price).toFixed(2)}</td>
        <td>
          <button class="action-btn edit-btn" onclick="editProduct(${index})">Edit</button>
          <button class="action-btn delete-btn" onclick="deleteProduct(${index})">Delete</button>
        </td>
      `;
            tableBody.appendChild(row);
        });
}

// Add or Update product
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("productId").value;
    const name = document.getElementById("productName").value.trim();
    const category = document.getElementById("productCategory").value.trim();
    const quantity = parseInt(document.getElementById("productQuantity").value);
    const price = parseFloat(document.getElementById("productPrice").value);

    if (id) {
        // Update
        products[id] = { name, category, quantity, price };
    } else {
        // Add new
        products.push({ name, category, quantity, price });
    }

    localStorage.setItem("products", JSON.stringify(products));
    form.reset();
    document.getElementById("productId").value = "";
    renderProducts();
});

// Edit product
function editProduct(index) {
    const product = products[index];
    document.getElementById("productId").value = index;
    document.getElementById("productName").value = product.name;
    document.getElementById("productCategory").value = product.category;
    document.getElementById("productQuantity").value = product.quantity;
    document.getElementById("productPrice").value = product.price;
}

// Delete product
function deleteProduct(index) {
    if (confirm("Are you sure you want to delete this product?")) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        renderProducts();
    }
}

// Search filter
searchBar.addEventListener("input", (e) => renderProducts(e.target.value));

// Initialize page
renderProducts();
