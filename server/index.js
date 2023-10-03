const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors())

const controller = require('./controller')











app.listen(1234, () => {console.log('Running on 1234')})