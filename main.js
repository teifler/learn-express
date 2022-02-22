const express = require('express')
const app = express()

//middleware - - looks at body of request
app.use(express.urlencoded({ extended: false }))

//request //response
//Load Website is get request
app.get('/', (req, res) => {
  res.send(`
  <h1?>What color is the sky on a clear day?</h1?>
  <form action="/result" method="POST">
    <input type="text" name="color">
    <button>Submit Answer</button>
  </form>`)
})

app.get('/about', (req, res) => {
  res.send('Thanks for learning more about us')
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
