let request = require('request');

let apiKey = '23d8936d086e8ec8e7b622c8aaf6994a';
let city = 'deer park';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
    if(err){
    console.log('error:', error);
    } else {
    console.log('body:', body);
    }

    let weather = JSON.parse(body);

    let message = `It's ${Math.ceil(9/5*(weather.main.temp-273)+32)} degrees in ${weather.name}!`;
    console.log(message);
});

