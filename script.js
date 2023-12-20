const capitalDiv = document.createElement("div");
const flagDiv = document.createElement("div");
const countryDiv = document.createElement("div");
const continentDiv = document.createElement("div");
const sectionInfo = document.querySelector("#info");

// const card = document.querySelector('.card')
// const random = document.querySelector('.btnRandom')
const loader = document.querySelector('.loaderContent')
window.addEventListener('load',(e)=>{
    loader.classList.add('out')
})

function search() {
  let textcountry = document.querySelector("#text").value;

  let url = "https://restcountries.com/v3.1/name/" + textcountry;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      nameCountry = data[0].name["common"];
      continentCountry = data[0].region;
      capitalCountry = data[0].capital;
      flagCountry = data[0].flags["png"];

      countryDiv.innerHTML = `<div class="box"><h3>pays</h3><p>${nameCountry}</p></div>`;
      continentDiv.innerHTML = `<div class="box"><h3>Continent</h3><p>${continentCountry}</p></div>`;
      capitalDiv.innerHTML = `<div class="box"><h3>capital</h3><p>${capitalCountry}</p></div>`;
      flagDiv.innerHTML = `<div class="box"><h3>drapeau</h3><img src=${flagCountry}></div>`;

      sectionInfo.appendChild(countryDiv);
      sectionInfo.appendChild(continentDiv);
      sectionInfo.appendChild(capitalDiv);
      sectionInfo.appendChild(flagDiv);
    });
}

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}