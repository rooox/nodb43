const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
let app = express();

app.use(bodyParser.json());

app.get('/api/sets', ctrl.getSets)
app.post('/api/sets', ctrl.newSet)
app.put('/api/sets/:id', ctrl.editSet)
app.delete('/api/sets/:id', ctrl.deleteSet)

app.listen (5080, () => console.log(`Radar contact on port 5080`));