const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=d8fd5ba6638f567ebd87c0b6e970cc3d&query=37.8267,-122.4233&units=m'

request({ url : url, json : true }, (error, response) => {
    const currentTemp = response.body.current.temperature
    const feelsLikeTemp = response.body.current.feelslike
    const description = response.body.current.weather_descriptions[0]
    console.log(`It is currently ${description.toLowerCase()}.`)
    console.log(`It is currently ${currentTemp} degrees out.`)
    console.log(`It feels like ${feelsLikeTemp} degrees out.`)
})