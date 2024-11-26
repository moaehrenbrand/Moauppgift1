let cityFromUser = prompt ("Vilken stad?");

const bigCityDiv = document.querySelector("#cities");

function createCityButtom(cityName) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cityBox");
    newDiv.textContent = cityName;
    bigCityDiv.append(newDiv);
}

for (let i = 0; i < cities.length; i++) {
    createCityButtom(cities[i].name)
}

let cityFound = false;

for (let i = 0; i < cities.length; i++) {
    if (cityFromUser == cities[i].name) {
        document.querySelector("h2").textContent = `${cities[i].name} (${cities[i].country})`;
        document.querySelector("title").textContent = `${cities[i].name}`;
        const cityDivs = document.querySelectorAll(".cityBox");
        cityDivs[i].classList.add("target");
        cityFound = true;
        break;
    }
}

if (!cityFound) {
  document.querySelector("h2").textContent = `${cityFromUser} finns inte i databasen`;
  document.querySelector("title").textContent = `Not found`;
  document.querySelector("h3").textContent = null;
}

let maxDistance = 0;
let furthestCityIndex = -1;

const ifCityMatch = (cityName, cityIndex) => cityFromUser === cities[cityIndex].name;

for (let i = 0; i < distances.length; i++) {
  const {city1, city2, distance} = distances[i];
  
  if (ifCityMatch(cityFromUser, city1) || ifCityMatch(cityFromUser, city2)) {
    const otherCity = ifCityMatch(cityFromUser, city1) ? city2 : city1;
    
    if (distance > maxDistance) {
      maxDistance = distance;
      furthestCityIndex = otherCity;
    }
  }
}

if (furthestCityIndex !== -1) {
  const cityDi = document.querySelectorAll(".cityBox");
  cityDi[furthestCityIndex].classList.add("furthest");
  cityDi[furthestCityIndex].textContent = `${cities[furthestCityIndex].name} ligger ${maxDistance/10} mil bort`;
  document.getElementById("furthest").textContent = `${cities[furthestCityIndex].name}`;
}

let minDistance = Infinity; 
let closestCityIndex = -1;

const isCityMatch = (cityName, cityIndex) => cityFromUser === cities[cityIndex].name;

for (let i = 0; i < distances.length; i++) {
  const {city1, city2, distance} = distances[i];
  
  if (isCityMatch(cityFromUser, city1) || isCityMatch(cityFromUser, city2)) {
    const otherCity = isCityMatch(cityFromUser, city1) ? city2 : city1;
    
    if (distance < minDistance) {
      minDistance = distance;
      closestCityIndex = otherCity;
    }
  }
}

if (closestCityIndex !== -1) {
  const cityDi = document.querySelectorAll(".cityBox");
  cityDi[closestCityIndex].classList.add("closest");
  cityDi[closestCityIndex].textContent = `${cities[closestCityIndex].name} ligger ${minDistance/10} mil bort`;
  document.getElementById("closest").textContent = `${cities[closestCityIndex].name}`;
}

function createTable() {
  const tabell = document.querySelector("#table");
  tabell.style.width = "100%";
  tabell.style.display = "grid";

  const rows = cities.length;
  const columns = cities.length + 1;

  for (let a = 0; a < columns; a++) {
      const emptyCell = document.createElement("div");
      emptyCell.classList.add("cell");
      emptyCell.classList.add("head_column");
      emptyCell.style.display = "grid";

      if (a === 0) {
          emptyCell.textContent = "";
      } else {
          emptyCell.textContent = cities[a - 1].id;
      }
      tabell.appendChild(emptyCell);
  }

  for (let i = 0; i < rows; i++) {
      let namesRow = document.createElement("div");
      namesRow.textContent = cities[i].id + " - " + cities[i].name;
      namesRow.classList.add("head_row");
      namesRow.classList.add("cell");
      tabell.appendChild(namesRow);

      if (i % 2 === 0) {
        namesRow.classList.add("even_row");
      }

      for (let j = 0; j < cities.length; j++) {
          const cell = document.createElement("div");
          cell.classList.add("cell");
          cell.style.display = "grid";
          if (j % 2 === 0) {
            cell.style.backgroundColor = "lightgrey";
          }

          let distanceValue = null;
          for (let distance of distances) {
              if ((distance.city1 === cities[i].id && distance.city2 === cities[j].id)) {
                  distanceValue = distance.distance;
                  break;
              }
              if (distance.city2 === cities[i].id && distance.city1 === cities[j].id) {
                  distanceValue = distance.distance;
              }
          }

          if (distanceValue !== null) {
              cell.textContent = distanceValue / 10;
          } else if (i === j) {
              cell.textContent = "";
          }

          if (i % 2 === 0) {
            cell.classList.add("even_row");
          }

          tabell.appendChild(cell);
      }
  }
}

createTable()






