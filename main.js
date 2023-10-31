function popUp(planet) {
  const popupModal = document.getElementById("modal");
  document.getElementById("planetName").textContent = `Namn: ${planet.name}`;
  document.getElementById(
    "latinName"
  ).textContent = `latin: ${planet.latinName}`;
  document.getElementById("desc").textContent = `desc: ${planet.desc}`;
  document.getElementById("circ").textContent = `circ: ${
    planet.circumference + "Km"
  }`;
  document.getElementById("distance").textContent = `dist: ${planet.distance}`;
  document.getElementById(
    "dayTemp"
  ).textContent = `daytemp: ${planet.temp.day}`;
  document.getElementById(
    "nightTemp"
  ).textContent = `nighttemp: ${planet.temp.night}`;
  document.getElementById("moons").textContent = `moons: ${planet.moons.join(
    ", "
  )}`;

  popupModal.style.display = "block";
  popupModal.style.display = "flex";
}

// function callPopup(planet) {
//   popUp(planet);
//   console.log(data);
// }

const planetDiv = document.querySelector(".planets");

const API_URL = "https://majazocom.github.io/Data/solaris.json";

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

      //   planetElement.addEventListener("click", () => callPopup(planet));
      planetElement.addEventListener("click", () => popUp(planet));

      planetDiv.append(planetElement);
    });

    return data;
  } catch (error) {
    console.error("Fel:", error);
  }
};

let data = createPlanets(API_URL);

const onClick = document.querySelectorAll(".planets div");

console.log(data);
