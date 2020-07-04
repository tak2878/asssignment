const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db/db');
const userRoutes = require('./routes/users');
const tournamentRoutes = require('./routes/tournaments');



const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use('/users', userRoutes);
app.use('/tournaments', tournamentRoutes);

app.get('/',(req,res) => res.send('<h1>Demo App</h1>'))
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('server running on port 3000');
})