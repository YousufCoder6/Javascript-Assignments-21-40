var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
var outputDiv = document.getElementById("output");
var cityInput = document.getElementById("cityInput");
var checkBtn = document.getElementById("checkBtn");

function checkCityCaseInsensitive(rawInput) {
  var cityToCheck = rawInput.toLowerCase();
  var upperPreview = rawInput.toUpperCase();
  var matchFound = false;

  for (var i = 0; i < cleanestCities.length; i++) {
    if (cityToCheck === cleanestCities[i]) {
      matchFound = true;
      break;
    }
  }

  var resultMessage = matchFound
    ? "It's one of the cleanest cities"
    : "It's not on the list";

  outputDiv.innerHTML = `
    <div class="result-card">Original input: <strong>${rawInput || "(empty)"}</strong></div>
    <div class="result-card">Lowercase (<code>toLowerCase()</code>): <strong>${cityToCheck || "(empty)"}</strong> | Uppercase (<code>toUpperCase()</code>): <strong>${upperPreview || "(empty)"}</strong></div>
    <div class="result-card">Match status: <strong>${resultMessage}</strong> (Flag: <strong>${matchFound}</strong>)</div>
  `;
}

checkBtn.addEventListener("click", function () {
  checkCityCaseInsensitive(cityInput.value.trim());
});

cityInput.value = "SANTA FE";
checkCityCaseInsensitive("SANTA FE");