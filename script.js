// Fetch all planets with the X-Api-Key header and parameters
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/planets',
    headers: {
        'X-Api-Key': 'KPyAryvwq3xkDoePNEb0Gw==xcnkiw0PmV37pZsS'
    },
    
    contentType: 'application/json',
    success: function(result) {
        console.log(result);

        // Check if the result contains an array of planets
        if (result && Array.isArray(result)) {
            result.forEach(planet => {
                const button = $('<button></button>');
                button.text(planet.name);
                button.on('click', () => handlePlanetButtonClick(planet.name));
                planetButtonsContainer.append(button);
            });
        } else {
            console.error('Error: No planets found in the API response.');
        }
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
