const express = require('express');
require('dotenv').config();
const { json } = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller');

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING)
.then(db => app.set('db', db))
.catch(err => console.log('Error!', err))

app.get('/api/houses', ctrl.getHouses);

app.post('/api/house', ctrl.addHouse);

app.delete('/api/house/:id', ctrl.deleteHouse);


const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => {console.log(`Simulating on ${PORT}`)})