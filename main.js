const express = require('express')
const res = require('express/lib/response')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//middleware - - looks at body of request
//use means for all middleware / functions
app.use(express.urlencoded({ extended: false }))

//request //response
//Load Website is get request

//End of the function call next --> so they know this middle
//ware function has done its job ggo to next function
function getWeather(req, res, next) {
  req.visitorWeather = false
  req.visitorWeather === true
    ? res.send('Please come back when its not raining')
    : next()
}

//route to /
//we can define functions for routes as many as we want

app.get('/', getWeather, (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.send('Thanks for learning more about us')
})

app.get('/crypto', (req, res) => {
  res.send('Bitcoin to the moon')
})

app.post('/result', (req, res) => {
  //trim remove whitespace
  if (req.body.color.trim().toLowerCase() === 'blue') {
    res.send('Congratz, that is correct')
  } else {
    res.send('Incorrect answer')
  }
})

app.get('/result', (req, res) => {
  res.send('Why are you visiting the url')
})

//Port 3000
app.listen(3000)
