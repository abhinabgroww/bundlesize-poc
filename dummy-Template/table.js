
function generateTable() {
    // Get the table container element
    const URL_APPSCRIPT = "https://script.google.com/macros/s/AKfycbwV5F8v4TT36Lyuey7ho3CAsTC9H7oYglZ61gZ62iyiIg6UIU754V53fl2wiClhgc2d/exec"
    const URL_SHEETDB = "https://sheetdb.io/api/v1/cq1zv99bs9lz9"

    const tableContainer = document.querySelector("#table-container");
    const table = document.querySelector("#table-main");
   
      // Iterate over the data and create a row for each object
  const dataAddition = (data) => {
    console.log(data, "assas")
    for (const object of data) {
        const row = document.createElement("tr");
    
        row.innerHTML = `<td><a href=${object.url} target="/">${
          object.url
        }</a></td><td>${
          object.emulatedFormFactor
        }</td><td class="score ${
          object["scores/accessibility"] > 85
            ? "score-good"
            : object["scores/accessibility"] > 75
            ? "score-average"
            : "score-bad"
        }">${object["scores/accessibility"]}</td>
        <td class="score ${
            object["scores/bestPractices"] > 85
              ? "score-good"
              : object["scores/bestPractices"] > 75
              ? "score-average"
              : "score-bad"
          }">${
          object["scores/bestPractices"]
        }</td>
        <td class="score ${
            object["scores/performance"] > 85
              ? "score-good"
              : object["scores/performance"] > 75
              ? "score-average"
              : "score-bad"
          }">${object["scores/performance"]}</td>
        
        <td class="score ${
            object["scores/seo"] > 85
            ? "score-good"
              : object["scores/seo"] > 75
              ? "score-average"
              : "score-bad"
          }">${object["scores/seo"]}</td>`;
    
        table.appendChild(row);
      }
  }

    async function logReports() {
        const response = await fetch(URL_APPSCRIPT);
        var dataArray = await response.json().then((res) => dataAddition(res.data));
        console.log(dataArray,"dada");
        // dataAddition(dataArray.data);
        return dataArray;
    }
    logReports();
    console.log(data)
    
  // Create a table header row
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `<th scope="col"> URL</th><th scope="col">Emulated Form Factor</th><th scope="col">Accessibility</th><th scope="col">Best Practices</th><th scope="col">Performance</th><th scope="col">SEO</th>`;
  table.appendChild(headerRow);



  // Append the table to the table container element
}

// Generate the table when the page loads
document.addEventListener("DOMContentLoaded", generateTable);
