const express = require('express');
const { displayImage } = require('./images');
const app = express();

const PORT = 5000;

const json = {
    "name": "Noby",
    "hobby": "wuxia novels",
    "mood": "green",
    "goals": [{
        "finance": "to save enough to live a year",
        "coding": "learn mern stack"
    }, 
    {
        "language": "French"
    }
]
};



app.get('/', (req, res) => {
    displayImage(res);
});

app.post('/', (req, res) => {
    res.send('This is a post request, AAO!');
});

app.listen(PORT, () => {
    console.log('Hello There!, From port ' + PORT);
});