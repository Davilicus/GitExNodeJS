const express = require('express');

const app = express();

app.all('*', (req,res,next) => {
    next();
});

app.get('/hello', (req, res, next) => {
    res.status(200).json({
        'msg': 'Hello JEDI\'s'
    });
});

//Start the server
const port = 8080;
app.listen(port, () => {
    console.log('The magic happens at http://localhost:' + port);
});

module.exports = app;