import data from "./reports.json" assert { type: "json" };

function generateTable() {
  // Get the table container element
  const URL_APPSCRIPT =
    "https://script.google.com/macros/s/AKfycbzSPzynMuaavoKnC1PLV03VN0afp2x_bQylju3iDQVzzj_uSYWTYwheeLtiio84qQg/exec";
  const URL_SHEETDB = "https://sheetdb.io/api/v1/cq1zv99bs9lz9";

  const tableContainer = document.querySelector("#table-container");
  const table = document.querySelector("#table-main");

  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `<th  > URL</th><th  >Emulated Form Factor</th><th  >Accessibility</th><th  >Best Practices</th><th  >Performance</th><th  >SEO</th>`;
  table.appendChild(headerRow);
  // Iterate over the data and create a row for each object
  const dataAddition = (data) => {
    console.log(data, "assas");
    for (const object of data) {
      const row = document.createElement("tr");

      row.innerHTML = `<td class="score"><a href=${object.url} target="/">${
        object.url
      }</a></td><td class="score">${object.emulatedFormFactor}</td><td class="score ${
        object["accessibility"] > 85
          ? "score-good"
          : object["accessibility"] > 75
          ? "score-average"
          : "score-bad"
      }">${object["accessibility"]}</td>
        <td class="score ${
          object["bestPractices"] > 85
            ? "score-good"
            : object["bestPractices"] > 75
            ? "score-average"
            : "score-bad"
        }">${object["bestPractices"]}</td>
        <td class="score ${
          object["performance"] > 85
            ? "score-good"
            : object["performance"] > 75
            ? "score-average"
            : "score-bad"
        }">${object["performance"]}</td>
        
        <td class="score ${
          object["seo"] > 85
            ? "score-good"
            : object["seo"] > 75
            ? "score-average"
            : "score-bad"
        }">${object["seo"]}</td>`;

      table.appendChild(row);
    }
  };

  async function logReports() {
    const response = await fetch(URL_APPSCRIPT);
    var dataArray = await response.json().then((res) => dataAddition(res.data));
    console.log(dataArray, "dada");
    // dataAddition(dataArray.data);
    return dataArray;
  }
  logReports();
  console.log(data);

  // Create a table header row

  // Append the table to the table container element
}

// Generate the table when the page loads
document.addEventListener("DOMContentLoaded", generateTable);
