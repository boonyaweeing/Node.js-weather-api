const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=d8fd5ba6638f567ebd87c0b6e970cc3d&query=' + latitude + ',' + longitude + '&units=m'

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            const currentTemp = response.body.current.temperature
            const feelsLikeTemp = response.body.current.feelslike
            const description = response.body.current.weather_descriptions[0]
            callback(undefined, `It is currently ${description.toLowerCase()}. ` + `It is currently ${currentTemp} degrees out. ` + `It feels like ${feelsLikeTemp} degrees out.`)
        }
    })
}


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






module.exports = forecast