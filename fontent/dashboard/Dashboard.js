document.getElementById("totalProducts").innerText = dashboardData.totalProducts;
document.getElementById("totalSuppliers").innerText = dashboardData.totalSuppliers;
document.getElementById("ordersPending").innerText = dashboardData.ordersPending;
document.getElementById("lowStock").innerText = dashboardData.lowStock;


const canvas = document.getElementById("stockChart");
const ctx = canvas.getContext("2d");

const labels = dashboardData.stockChartData.labels;
const data = dashboardData.stockChartData.data;


ctx.fillStyle = "#007bff";
const barWidth = 60;
const gap = 30;

for (let i = 0; i < data.length; i++) {
    const x = 50 + i * (barWidth + gap);
    const y = 200 - data[i];
    ctx.fillRect(x, y, barWidth, data[i]);
    ctx.fillStyle = "#007bff";
    ctx.fillText(labels[i], x + 15, 190 + 20);
}
