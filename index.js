// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code
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

//----------------------------------

let cityFound = false;

for (let i = 0; i < cities.length; i++) {
    if (cityName == cities[i].name) {
        document.querySelector("h2").textContent = `${cities[i].name} (${cities[i].country})`;
        document.querySelector("title").textContent = `${cities[i].name}`;
        const cityDivs = document.querySelectorAll(".cityBox");
        cityDivs[i].classList.add("target");
        cityFound = true;
        break;
    }
}

//----------------------------------

let maxDistance = 0;
let farthestCityIndex = -1;

const ifCityMatch = (cityName, cityIndex) => cityFromUser === cities[cityIndex].name;

for (let i = 0; i < distances.length; i++) {
  const {city1, city2, distance} = distances[i];
  if (ifCityMatch(cityFromUser, city1) || ifCityMatch(cityFromUser, city2)) {
    const otherCity = ifCityMatch(cityFromUser, city1) ? city2 : city1;
    if (distance > maxDistance) {
      maxDistance = distance;
      farthestCityIndex = otherCity;
    }
  }
}

if (farthestCityIndex !== -1) {
  document.querySelectorAll(".cityBox")[farthestCityIndex]?.classList.add("furthest");
}

//let maxDistance = 0;
//let farthestCityIndex = -1;
//
//for (let i = 0; i < distances.length; i++) {
//  if (cityName === cities[distances[i].city1].name || cityName === cities[distances[i].city2].name) {
//    let farthestCity = (cityName === cities[distances[i].city1].name) ? distances[i].city2 : distances[i].city1;
//    if (distances[i].distance > maxDistance) {
//      maxDistance = distances[i].distance;
//      farthestCityIndex = farthestCity;
//    }
//  }
//}
//
//if (farthestCityIndex !== -1) {
//    const cityDivs = document.querySelectorAll(".cityBox");
//    cityDivs[farthestCityIndex].classList.add("furthest");
//  }

//----------------------------------

  //let minDistance = Infinity; 
  //let closestCityIndex = -1;
  //
//
  //for (let i = 0; i < distances.length; i++) {
  //  if (cityName === cities[distances[i].city1].name || cityName === cities[distances[i].city2].name) {
  //    let closestCity = (cityName === cities[distances[i].city1].name) ? distances[i].city2 : distances[i].city1;
  //    if (distances[i].distance < minDistance) {
  //      minDistance = distances[i].distance;
  //      closestCityIndex = closestCity;
  //    }
  //  }
  //}
//
  //if (closestCityIndex !== -1) {
  //  const cityDivs = document.querySelectorAll(".cityBox");
  //  cityDivs[closestCityIndex].classList.add("closest");
  //}

//----------------------------------

