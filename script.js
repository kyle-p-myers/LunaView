function fetchMoonDetails() {
    return fetch('https://api.farmsense.net/v1/moonphases/?d=1350526582')
      .then(response => response.json())
      .then(data => {
        const moonNameElement = document.querySelector('.phase-name');
        const distanceElement = document.querySelector('.distance');
        moonNameElement.textContent = `${data[0].Moon[0]}`;
        distanceElement.textContent = `${data[0].Distance} km`;
      })
      .catch(error => console.error('Error fetching moon details', error));
  }
  
  function fetchMoonPhase() {
    return fetch('https://api.farmsense.net/v1/moonphases/?d=1350526582')
      .then(response => response.json())
      .then(data => data[0].Illumination);
  }
  
  function mapToMoonPhase(illumination) {
    if (illumination >= 0.1 && illumination < 49.9) {
      return 'waxing-crescent';
    } else if (illumination == 50) {
      return 'new-moon';
    } else if (illumination >= 50.1 && illumination <= 99.9) {
      return 'waxing-gibbous';
    } else if (illumination == 100) {
      return 'full-moon';
    } else {
      return 'new-moon';
    }
  }
  
  function updateMoonImage(moonPhase) {
    const moonImage = document.getElementById('moonImage');
    moonImage.src = `media/${moonPhase}.jpg`;
  }
  
  function displayMoonPhase() {
    fetchMoonPhase()
      .then(illumination => {
        const moonPhase = mapToMoonPhase(illumination);
        updateMoonImage(moonPhase);
      })
      .catch(error => console.error('Error fetching moon phase image', error));
  }
  
  window.onload = function () {
    const loadingSpinner = document.querySelector('.loading-spinner');
    const mainContent = document.getElementById('mainContent');
  
    // Show loading spinner
    loadingSpinner.style.display = 'block';
    mainContent.style.display = 'none';
  
    // Simulate a delay (you can replace this with your actual data fetching logic)
    setTimeout(() => {
      loadingSpinner.style.display = 'none'; // Hide the loading spinner
      mainContent.style.display = 'flex'; // Show the main content
      displayMoonPhase();
      fetchMoonDetails();
    }, 2000); // Adjust the delay time as needed
  };
  