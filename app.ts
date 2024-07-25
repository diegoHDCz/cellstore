import 'reflect-metadata';

import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';

import dbClient from './app/services/sequlizeCon';

const app: Application = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Deu bom isso aqui");
});

//dbClient.sync()

app.listen(PORT)


