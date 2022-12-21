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

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFnbmFyLWluZyIsImEiOiJjbGFtOGdvdmIwZDB0M3F0N21xbHM4aTN3In0.sXV-mhnrh5uG85uSsd9gPQ&limit=1'

request({ url : url2, json : true }, (error, response) => {
    const placeName = response.body.features[0].place_name
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(`In ${placeName}.`)
    console.log(`Latitude : ${latitude}`)
    console.log(`Longitude :  ${longitude}`)
})