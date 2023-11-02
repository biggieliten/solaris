//Här deklareras alla globala variabler för funktionerna. "API_URL" hämtar själva länken. De 4 andra targetar diverse element i HTML med "querySelector" eller "getElementById". Dessa variabler används senare i olika funktioner.
const API_URL = "https://majazocom.github.io/Data/solaris.json";
const closeModal = document.querySelector(".closeModal");
const popupModal = document.getElementById("modal");
const starContainer = document.querySelector(".stars");
const planetDiv = document.querySelector(".planets");

// Funktionen "CreatePlanets" hämtar api-datan från länken och gör om den till läsbar data för JS genom "response.json". Funktionen skapar även alla planeter som "divvar" och skickar dom vidare till ".planets" i HTML genom "planetDiv" eftersom dem är kopplade till varandra. Funktionen har även en try catch som skall fånga upp ifall något går fel när vi antingen skall fetcha datan från apin eller skapa planet divvarna.
const createPlanets = async (apiURL) => {
  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    data = await response.json(); // Tilldela datan till den globala variabeln

    data.forEach((planet) => {
      const planetElement = document.createElement("div");
      planetElement.classList.add(planet.name.toLowerCase());

      planetElement.addEventListener("click", () => popUp(planet));

      planetDiv.append(planetElement);
    });

    return data;
  } catch (error) {
    console.error("Fault:", error);
  }
};
let data = createPlanets(API_URL);

// Här är funktionen där vi plockar fram all info från apin samt hämtar elementen från HTML med "getElementById". Vi lägger till datan från apiet genom att ta ".textcontent" = "planet.property". Alltså har vi i funktionen createPlanets kört foorloopen " data.forEach((planet) ", där i har plockat hem alla planeter och där vi kallar objecten "planets". Där med tar vi te.x "planet.latinName" för att få fram alla specifika latinNames.
function popUp(planet) {
  document.getElementById("planetName").textContent = `${planet.name}`;
  document.getElementById("latinName").textContent = `${planet.latinName}`;
  document.getElementById("desc").textContent = ` ${planet.desc}`;
  document.getElementById("circ").textContent = ` ${
    planet.circumference.toLocaleString("sv-SE") + " km"
  }`;
  document.getElementById("distance").textContent = `${
    planet.distance.toLocaleString("sv-SE") + " km"
  }`;
  document.getElementById("dayTemp").textContent = `	 ${
    planet.temp.day + " °C"
  }`;
  document.getElementById("nightTemp").textContent = `${
    planet.temp.night + " °C"
  }`;
  document.getElementById("moons").textContent = `${planet.moons.join(", ")}`;

  popupModal.style.display = "block";
  popupModal.style.display = "flex";
}

// Nedan har vi en funktion som skall stänga ner själva modalen som kommer kommer upp när man klickar på en planet.
closeModal.addEventListener("click", () => closePopupModal);

function closePopupModal() {
  popupModal.style.display = "none";
}

// Detta är en funktion som skapar stjärnorna med en for-loop. Antalet stjärnor är 400 och då loopas funktionen fram tills att vi har nått 400 st "star-divvar" (se "const star" och villkoren i loopen). Funktionen randomizar även positionerna för alla stjärnor genom "math.random".
function stars() {
  for (let i = 0; i < 400; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.size;

    starContainer.appendChild(star);
  }
}
stars();
