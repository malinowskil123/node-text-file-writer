const request = require('request');

const apiKey = '23d8936d086e8ec8e7b622c8aaf6994a';
const location = 'deer park';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`

request(url, function (err, response, body) {
    if(err){
    console.log('error:', error);
    } else {
    console.log('body:', body);
    }

    let weather = JSON.parse(body);

    let message = `It's ${Math.ceil(9/5*(weather.main.temp-273)+32)} degrees fahrenheit ${weather.name}!`;
    console.log(message);
});

