
let categories = JSON.parse(localStorage.getItem("categories")) || [];

const form = document.getElementById("categoryForm");
const table = document.getElementById("categoryTable");
const search = document.getElementById("searchCategory");


function renderCategories(filter = "") {
    table.innerHTML = "";

    categories
        .filter(cat => cat.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach((cat, index) => {
            const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${cat.name}</td>
          <td>${cat.description || "—"}</td>
          <td>
            <button class="action-btn edit-btn" onclick="editCategory(${index})">Edit</button>
            <button class="action-btn delete-btn" onclick="deleteCategory(${index})">Delete</button>
          </td>
        </tr>
      `;
            table.insertAdjacentHTML("beforeend", row);
        });
}


form.addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("categoryId").value;
    const name = document.getElementById("categoryName").value.trim();
    const description = document.getElementById("categoryDescription").value.trim();

    if (!name) {
        alert("Category name is required!");
        return;
    }

    if (id) {
        categories[id] = { name, description };
    } else {
        categories.push({ name, description });
    }

    localStorage.setItem("categories", JSON.stringify(categories));
    form.reset();
    document.getElementById("categoryId").value = "";
    renderCategories();
});


function editCategory(index) {
    const cat = categories[index];
    document.getElementById("categoryId").value = index;
    document.getElementById("categoryName").value = cat.name;
    document.getElementById("categoryDescription").value = cat.description;
}


function deleteCategory(index) {
    if (confirm("Are you sure you want to delete this category?")) {
        categories.splice(index, 1);
        localStorage.setItem("categories", JSON.stringify(categories));
        renderCategories();
    }
}


search.addEventListener("input", (e) => renderCategories(e.target.value));


renderCategories();
