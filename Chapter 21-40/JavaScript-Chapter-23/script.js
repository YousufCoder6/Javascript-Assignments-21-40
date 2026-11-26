var text = "To be or not to be.";
var outputDiv = document.getElementById("output");
var segmentInput = document.getElementById("segmentInput");
var findBtn = document.getElementById("findBtn");

function findInQuote(segment) {
  var firstIdx = text.indexOf(segment);
  var segIndex = text.lastIndexOf(segment);

  outputDiv.innerHTML = `
    <div class="result-card">Source text: <strong>"${text}"</strong></div>
    <div class="result-card">Search segment: <strong>"${segment || ""}"</strong></div>
    <div class="result-card">First index (<code>indexOf</code>): <strong>${firstIdx}</strong></div>
    <div class="result-card">Last index (<code>lastIndexOf</code>, e.g. <code>segIndex</code> for "be" = 16): <strong>${segIndex}</strong></div>
  `;
}

findBtn.addEventListener("click", function () {
  findInQuote(segmentInput.value);
});

segmentInput.value = "be";
findInQuote("be");