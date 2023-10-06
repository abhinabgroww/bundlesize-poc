import data from './reports.json' assert { type: 'json' }; 
console.log(data)

function generateTable() {
  // Get the table container element
  const tableContainer = document.querySelector("#table-container");

  // Create a new table element
  const table = document.createElement("table");
  table.classList.add("lighthouse-report");

  // Create a table header row
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `<th>URL</th><th>Local Report</th><th>Emulated Form Factor</th><th>Accessibility</th><th>Best Practices</th><th>Performance</th><th>SEO</th>`;
  table.appendChild(headerRow);

  // Iterate over the data and create a row for each object
  for (const object of data) {
    const row = document.createElement("tr");

    row.innerHTML = `<td><a href=${object.url} target="/">${
      object.url
    }</a></td><td>${object.localReport}</td><td>${
      object.emulatedFormFactor
    }</td><td class="score ${
      object.scores.accessibility > 85
        ? "score-good"
        : object.scores.accessibility > 75
        ? "score-average"
        : "score-bad"
    }">${object.scores.accessibility}</td>
    <td class="score ${
        object.scores.bestPractices > 85
          ? "score-good"
          : object.scores.bestPractices > 75
          ? "score-average"
          : "score-bad"
      }">${
      object.scores.bestPractices
    }</td>
    <td class="score ${
        object.scores.performance > 85
          ? "score-good"
          : object.scores.performance > 75
          ? "score-average"
          : "score-bad"
      }">${object.scores.performance}</td>
    
    <td class="score ${
        object.scores.seo > 85
        ? "score-good"
          : object.scores.seo > 75
          ? "score-average"
          : "score-bad"
      }">${object.scores.seo}</td>`;

    table.appendChild(row);
  }

  // Append the table to the table container element
  tableContainer.appendChild(table);
}

// Generate the table when the page loads
document.addEventListener("DOMContentLoaded", generateTable);
