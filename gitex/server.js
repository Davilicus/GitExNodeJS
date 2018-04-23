const express = require('express');

const app = express();

app.all('*', (req,res,next) => {
    next();
});

//Start the server
app.listen(8080, () => {
    console.log('The magic happens at http://localhost:' + 8080);
});

module.exports = app;