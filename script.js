document.addEventListener('DOMContentLoaded', function () {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      const planetData = JSON.parse(this.responseText);
      console.log('Received data:', planetData);

      // Initialize with the first planet
      updatePlanetInfo(planetData);

      // Add event listeners to the buttons
      const planetButtons = document.querySelectorAll('.planet-selector button');
      planetButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
          selectPlanet(index, planetData);
        });
      });
    }
  });

  xhr.open('GET', 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/');
  xhr.setRequestHeader('X-RapidAPI-Key', '6f7f651dfemsh0f58fe131691ceep114819jsnc4c536113d64');
  xhr.setRequestHeader('X-RapidAPI-Host', 'planets-info-by-newbapi.p.rapidapi.com');

  xhr.send();
});

let content = document.getElementById("planet-selector");

function animation() {
  content.innerHTML = htmlcontent;
  
  content.classList.add("animate");
  
  setTimeout(function() {
    content.classList.remove("animate");
  }, 500);
}



let currentPlanetIndex = 0; // Variable to keep track of the currently displayed planet

function updatePlanetInfo(planetData) {
  const currentPlanet = planetData[currentPlanetIndex];

  if (currentPlanet) {
    document.getElementById('planetName').textContent = currentPlanet.name;
    document.getElementById('planetDescription').textContent = currentPlanet.description;
    document.getElementById('planetVolume').textContent = `Volume: ${currentPlanet.basicDetails.volume}`;
    document.getElementById('planetMass').textContent = `Mass: ${currentPlanet.basicDetails.mass}`;

    // Set the background image of the photo div
    const photoElement = document.getElementById('planetPhoto');
    photoElement.style.backgroundImage = `url('${currentPlanet.imgSrc.img}')`;
    photoElement.setAttribute('title', currentPlanet.imgSrc.imgDescription);
  }
}

function selectPlanet(index, planetData) {
  currentPlanetIndex = index;
  updatePlanetInfo(planetData);
}
