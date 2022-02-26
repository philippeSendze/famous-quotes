const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const axios = require('axios').default
const express = require('express')
const app = express()
const PORT = 4000 || process.env.PORT

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => 
{
    console.log(`App listening on port ${PORT}`)
})

const options = {
  method: 'GET',
  url: 'https://free-famous-quotes.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'free-famous-quotes.p.rapidapi.com',
    'x-rapidapi-key':  process.env.RAPID_KEY,
  }
}

app.get('/citation', (req,res) => {
    axios.request(options)
        .then(response => {res.send(response.data)})
        .catch(function (error) {
	        console.error(error);
        })
})

