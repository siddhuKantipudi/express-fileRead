const express = require('express');
const fs = require('fs');
const path = require('path');
const port = 3000;

const app = new express();

// fs.readFile('responses.txt', 'utf8', function (data, error) {
//     if(error) {
//         console.log(`cannot read responses ${error}`);
//     }
//     console.log(data);
// });

app.get('/', (req, res) => res.send());

app.use('/static', express.static('public'));

app.listen(port, () => console.log(`listening to port ${port}`));
