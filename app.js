const express = require('express')

const app = express()

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
  res.send('Hello World!')
})

app.listen(3000)