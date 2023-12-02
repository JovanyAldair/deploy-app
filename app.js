const express = require("express")
const app = express()
const PORT = 8081
const router = express.Router()
const path = require('path')
const rootDir = require('./utils/path')

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static(path.join(rootDir, 'public')))
//The routes

app.get("/", (req, res) =>{
  
  res.render('home')
})


app.listen(PORT, ()=>{{
    console.log(`SERVER IS UP on port ${PORT}` )
}})

module.exports = app;