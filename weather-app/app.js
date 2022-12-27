// const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const yargs = require('yargs')

yargs.version('1.1.0')
// const url = 'http://api.weatherstack.com/current?access_key=d8fd5ba6638f567ebd87c0b6e970cc3d&query=&units=m'


// request({ url : url, json : true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const currentTemp = response.body.current.temperature
//         const feelsLikeTemp = response.body.current.feelslike
//         const description = response.body.current.weather_descriptions[0]
//         console.log(`It is currently ${description.toLowerCase()}.`)
//         console.log(`It is currently ${currentTemp} degrees out.`)
//         console.log(`It feels like ${feelsLikeTemp} degrees out.`)
//     }
// })


//GeoCoding
// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/munich.json?access_token=pk.eyJ1IjoicmFnbmFyLWluZyIsImEiOiJjbGFtOGdvdmIwZDB0M3F0N21xbHM4aTN3In0.sXV-mhnrh5uG85uSsd9gPQ&limit=1'



// request({ url : url2, json : true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location service!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else {
//         const placeName = response.body.features[0].place_name
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(`In ${placeName}.`)
//         console.log(`Latitude : ${latitude}`)
//         console.log(`Longitude : ${longitude}`)
//     }
// })

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {

    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, fdata) => {
            if (error) {
                return console.log(error)
            } 

            console.log(data.location)
            console.log(fdata)
        })
    })
}




//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

