const express = require('express');
const app = express();

const port = 8000;

//Use express Router
app.use('/', require('./routes'));

app.listen(port, function(err) {
    if (err) {
        // console.log('Error:', err);
        console.log(`Error in Running the Server: ${err}`);
        // return;
    }

    console.log(`Server running on port: ${port}`);
});