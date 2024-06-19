// Sample data for demonstration
const sampleData = [
    { timestamp: '2024-06-19 14:00', cod: 50, bod: 30, ph: 7.1, temperature: 25 },
    { timestamp: '2024-06-19 14:05', cod: 55, bod: 32, ph: 7.0, temperature: 26 },
    { timestamp: '2024-06-19 14:10', cod: 60, bod: 35, ph: 6.9, temperature: 27 },
    { timestamp: '2024-06-19 14:15', cod: 65, bod: 37, ph: 6.8, temperature: 28 },
    { timestamp: '2024-06-19 14:20', cod: 70, bod: 40, ph: 6.7, temperature: 29 },
];

function populateTable(data) {
    const tableBody = document.getElementById('data-table');
    tableBody.innerHTML = ''; // Clear existing rows

    data.forEach(entry => {
        const row = document.createElement('tr');

        Object.values(entry).forEach(text => {
            const cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
}

// Populate table with sample data on page load
document.addEventListener('DOMContentLoaded', () => {
    populateTable(sampleData);
});
