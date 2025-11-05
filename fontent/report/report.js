// Fetch inventory data from LocalStorage
const inventory = JSON.parse(localStorage.getItem("inventory")) || [];

// Elements
const totalItemsEl = document.getElementById("totalItems");
const totalValueEl = document.getElementById("totalValue");
const lowStockCountEl = document.getElementById("lowStockCount");
const outOfStockCountEl = document.getElementById("outOfStockCount");
const lowStockTable = document.getElementById("lowStockTable");

// Initialize values
let totalValue = 0;
let lowStockCount = 0;
let outOfStockCount = 0;

// Prepare chart data
const chartLabels = [];
const chartData = [];

// Generate report
inventory.forEach((item, index) => {
    const value = item.quantity * item.price;
    totalValue += value;

    if (item.quantity === 0) outOfStockCount++;
    if (item.quantity > 0 && item.quantity < 5) lowStockCount++;

    // Add to chart
    chartLabels.push(item.name);
    chartData.push(item.quantity);

    // Populate Low Stock Table
    if (item.quantity < 5) {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.category}</td>
      <td>${item.quantity}</td>
      <td>$${item.price.toFixed(2)}</td>
    `;
        lowStockTable.appendChild(row);
    }
});

// Display totals
totalItemsEl.textContent = inventory.length;
totalValueEl.textContent = totalValue.toFixed(2);
lowStockCountEl.textContent = lowStockCount;
outOfStockCountEl.textContent = outOfStockCount;

// Create chart using Chart.js
const ctx = document.getElementById("stockChart").getContext("2d");
new Chart(ctx, {
    type: "bar",
    data: {
        labels: chartLabels,
        datasets: [{
            label: "Stock Quantity",
            data: chartData,
            backgroundColor: "rgba(0, 123, 255, 0.6)",
            borderColor: "#007bff",
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: true, text: "Current Stock Levels" }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: { stepSize: 1 }
            }
        }
    }
});
