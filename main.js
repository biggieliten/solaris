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

      planetElement.addEventListener("click", () => popUp(planet));

      planetDiv.append(planetElement);
    });

    return data;
  } catch (error) {
    console.error("Fel:", error);
  }
};

let data = createPlanets(API_URL);

const starContainer = document.querySelector(".stars");

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

function popUp(planet) {
  const popupModal = document.getElementById("modal");
  document.getElementById("planetName").textContent = `${planet.name}`;
  document.getElementById("latinName").textContent = `${planet.latinName}`;
  document.getElementById("desc").textContent = ` ${planet.desc}`;
  document.getElementById("circ").textContent = ` ${
    planet.circumference + " km"
  }`;
  document.getElementById("distance").textContent = `${
    planet.distance + " km"
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

const planetDiv = document.querySelector(".planets");

const onClick = document.querySelectorAll(".planets div");
