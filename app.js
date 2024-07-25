const express = require('express')
const dotenv = require('dotenv');

dotenv.config()
const app = express()


app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


app.get('/', (req,res)=>{
  res.send('Hello World!')
})

app.listen(3000)