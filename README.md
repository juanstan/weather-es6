# weather-es6

weather
A React app

Open Weather Data to create a single page application that presents a list of 5 European cities (assets/cities.json). Get the current weather situation displaying the city name plus sunrise time and sunset time. Clicking on an item shows the sea level in the next 5 days at 9:00. System adjusts the UI to a single page application.

API details More details here http://openweathermap.org/current It is possible to find more information here http://openweathermap.org/api

Javascript version => ES6

How to run the app => npm run start

System uses webpack to bundle all modules

Libraries used: React moment lodash rechart

Structure src -- components (react components) -- containers (smart components connected to a api request service) -- assets -- models

On the npm package.json is declare the env param called API_TOKEN to authenticate user (under the script 'start')
