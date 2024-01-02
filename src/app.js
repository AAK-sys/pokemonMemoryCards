const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Test');
})

app.listen(PORT, () => {
    console.log('Hello There!, From port ' + PORT);
});