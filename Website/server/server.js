require('dotenv').config()

const express = require('express')
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())

//Request debug log
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


// Route
const home = require('./routes/home')
const about = require("./routes/about")
const resume = require('./routes/resume')
const project = require('./routes/project')

app.use('/', home)
app.use("/About", about)
app.use('/Resume',resume)
app.use('/Projects', project)

// Listen
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})

