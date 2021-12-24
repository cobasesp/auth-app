const express = require('express');
const app = express();
const router = require('./routes/routes');
const bodyParser = require('body-parser');
const port = 5000;

app.use('/', router);

app.listen(port, () => {
    console.log(`App listening on port ${port} ...`)
})