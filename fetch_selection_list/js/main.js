const searchInput = document.querySelector(".search");
const suggestion_list = document.querySelector(".suggestion_list");
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// const cities = [
//   { state: "New York", city: "New York", population: 1274743 },
//   { state: "Carlifonia", city: "Bevily Hills", population: 156743 },
// ];
let cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function displayMatches() {
  suggestion_list.style.display = "block";
  const matchArr = findMatches(this.value, cities);
  let suggestions = matchArr
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      return `
      <li> <span class="location">${stateName}, ${cityName}</span><span class="population">${numberWithCommas(
        place.population
      )}<span></li>
      `;
    })
    .join(" ");
  suggestion_list.innerHTML = suggestions;
  if (searchInput.value == "") {
    suggestion_list.style.display = "none";
  }
}

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
