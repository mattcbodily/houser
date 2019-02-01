const express = require('express');
require('dotenv').config();
const { json } = require('body-parser');
const massive = require('massive');

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
.then(db => app.set('db', db))
.catch(err => console.log('Error!', err))


const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {console.log(`Simulating on ${PORT}`)})