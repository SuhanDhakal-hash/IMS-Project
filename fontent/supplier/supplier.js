document.addEventListener("DOMContentLoaded", () => {
    const supplierForm = document.getElementById("supplierForm");
    const supplierTable = document.querySelector("#supplierTable tbody");

    // Fetch suppliers when page loads
    fetchSuppliers();

    // Add supplier
    supplierForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", document.getElementById("supplierName").value);
        formData.append("contact_person", document.getElementById("contactPerson").value);
        formData.append("phone", document.getElementById("phone").value);
        formData.append("email", document.getElementById("email").value);
        formData.append("address", document.getElementById("address").value);

        fetch("add_supplier.php", {
            method: "POST",
            body: formData,
        })
            .then(res => res.text())
            .then(data => {
                alert(data);
                supplierForm.reset();
                fetchSuppliers();
            });
    });

    // Fetch suppliers
    function fetchSuppliers() {
        fetch("fetch_suppliers.php")
            .then(res => res.json())
            .then(data => {
                supplierTable.innerHTML = "";
                data.forEach(supplier => {
                    const row = `
            <tr>
              <td>${supplier.name}</td>
              <td>${supplier.contact_person}</td>
              <td>${supplier.phone}</td>
              <td>${supplier.email}</td>
              <td>${supplier.address}</td>
              <td><button onclick="deleteSupplier(${supplier.id})">Delete</button></td>
            </tr>
          `;
                    supplierTable.innerHTML += row;
                });
            });
    }

    // Delete supplier
    window.deleteSupplier = function (id) {
        if (confirm("Are you sure you want to delete this supplier?")) {
            fetch(`delete_supplier.php?id=${id}`)
                .then(res => res.text())
                .then(data => {
                    alert(data);
                    fetchSuppliers();
                });
        }
    };
});
