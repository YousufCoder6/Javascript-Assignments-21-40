var outputDiv = document.getElementById("output");
var phraseInput = document.getElementById("phraseInput");
var indexInput = document.getElementById("indexInput");
var inspectBtn = document.getElementById("inspectBtn");

function inspectCharacters(text, idx) {
  var safeIdx = Number.isNaN(idx) || idx < 0 ? 0 : idx;
  var firstChar = text.charAt(0);
  var lastChar = text.length > 0 ? text.charAt(text.length - 1) : "";
  var charAtIdx = text.charAt(safeIdx);

  var hasExclamation = false;
  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === "!") {
      hasExclamation = true;
      break;
    }
  }

  outputDiv.innerHTML = `
    <div class="result-card">First character (<code>charAt(0)</code>): <strong>${firstChar || "(empty)"}</strong> | Last character: <strong>${lastChar || "(empty)"}</strong></div>
    <div class="result-card">Character at index <strong>${safeIdx}</strong> (<code>charAt(${safeIdx})</code>): <strong>${charAtIdx || "(out of range)"}</strong></div>
    <div class="result-card">Exclamation mark (<code>"!"</code>) found via loop: <strong>${hasExclamation}</strong></div>
  `;
}

inspectBtn.addEventListener("click", function () {
  inspectCharacters(phraseInput.value, parseInt(indexInput.value, 10));
});

phraseInput.value = "Muhammad Yousuf!";
indexInput.value = "0";
inspectCharacters("Muhammad Yousuf!", 0);