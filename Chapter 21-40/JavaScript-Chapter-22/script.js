var outputDiv = document.getElementById("output");
var textInput = document.getElementById("textInput");
var runBtn = document.getElementById("runBtn");

function analyzeString(rawText) {
  var firstChar = rawText.slice(0, 1).toUpperCase();
  var otherChars = rawText.slice(1).toLowerCase();
  var cappedText = firstChar + otherChars;

  var numChars = rawText.length;
  var hasDoubleSpace = false;

  for (var i = 0; i < numChars; i++) {
    if (rawText.slice(i, i + 2) === "  ") {
      hasDoubleSpace = true;
      break;
    }
  }

  var spaceStatus = hasDoubleSpace ? "No double spaces!" : "No double spaces found";
  if (hasDoubleSpace) {
    spaceStatus = "No double spaces! (Double space detected)";
  }

  outputDiv.innerHTML = `
    <div class="result-card">Capitalized format: <strong>${cappedText || "(empty)"}</strong></div>
    <div class="result-card">Character count (<code>.length</code>): <strong>${numChars}</strong></div>
    <div class="result-card">Slice preview (index 2 to end): <strong>${rawText.slice(2) || "(n/a)"}</strong></div>
    <div class="result-card">Double-space loop check: <strong>${spaceStatus}</strong></div>
  `;
}

runBtn.addEventListener("click", function () {
  analyzeString(textInput.value);
});

textInput.value = "boston";
analyzeString("boston");