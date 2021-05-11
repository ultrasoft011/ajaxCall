'use strict';

const countriesCointainer = document.querySelector('.countries');

// AJAX Call

const request = new XMLHttpRequest(); // New XMLHttpRequest
request.open('GET', 'https://restcountries.eu/rest/v2/name/colombia'); // URL API
request.send(); // Send the request 

request.addEventListener('load', function () { // Load event, waiting for that event and as soon as arrive the function will be executed

    const [data] = JSON.parse(this.responseText); // JSON to an object
    console.log(data);

    let html = `
        <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h1 class="country__name">${data.name}
                </h1>
            </div>
            `;
});

document.getElementById("countries").innerHTML = html;
