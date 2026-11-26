var sampleText =
  "It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was writing the trilogy, which contains, for the untold millions, a world within which they can escape the horrors of World War II.";

var outputDiv = document.getElementById("output");
var findInput = document.getElementById("findInput");
var replaceInput = document.getElementById("replaceInput");
var replaceBtn = document.getElementById("replaceBtn");

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function runReplacements(findValue, replaceValue) {
  var firstReplaced = sampleText.replace(findValue, replaceValue);
  var globalReplaced = findValue
    ? sampleText.replace(new RegExp(escapeRegExp(findValue), "g"), replaceValue)
    : sampleText;

  outputDiv.innerHTML = `
    <div class="result-card">Original <code>text</code> (unchanged): <strong>${sampleText}</strong></div>
    <div class="result-card">First match only (<code>replace()</code>): <strong>${firstReplaced}</strong></div>
    <div class="result-card">All matches (<code>/pattern/g</code>): <strong>${globalReplaced}</strong></div>
  `;
}

replaceBtn.addEventListener("click", function () {
  runReplacements(findInput.value, replaceInput.value);
});

findInput.value = "World War II";
replaceInput.value = "the Second World War";
runReplacements("World War II", "the Second World War");