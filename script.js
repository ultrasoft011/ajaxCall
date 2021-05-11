'use strict';

// AJAX Call

const request = new XMLHttpRequest(); // New XMLHttpRequest
request.open('GET', 'https://restcountries.eu/rest/v2/name/colombia'); // URL API
request.send(); // Send the request 

request.addEventListener('load', function () { // Load event, waiting for that event and as soon as arrive the function will be executed
    console.log(this.responseText);

})