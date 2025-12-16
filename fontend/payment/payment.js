let grandTotal = 0;

function addToBill() {
    const productSelect = document.getElementById("product");
    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const productName = selectedOption.value;
    const unitPrice = parseFloat(selectedOption.getAttribute("data-price"));
    const quantity = parseInt(document.getElementById("quantity").value);

    if (!quantity || quantity <= 0) {
        alert("Please enter a valid quantity!");
        return;
    }

    const total = unitPrice * quantity;
    grandTotal += total;

    const tableBody = document.querySelector("#billTable tbody");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
    <td>${productName}</td>
    <td>${unitPrice}</td>
    <td>${quantity}</td>
    <td>${total}</td>
  `;

    tableBody.appendChild(newRow);
    document.getElementById("grandTotal").textContent = grandTotal;

    document.getElementById("quantity").value = "";
}

function printBill() {
    window.print();
}