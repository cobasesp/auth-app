const express = require('express');
const app = express();
const router = require('./routes/routes');
const port = 5000;


app.get('/', (req, res) => {
    res.json({"test": 'ok'});
})

app.use(router);

app.listen(port, () => {
    console.log(`App listening on port ${port} ...`)
})