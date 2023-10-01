const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())
app.use('/', express.static('public'));

const budget = {
    myBudget:[
    {
        title: 'Personal Expenses',
        budget: 300
    },
    {
        title: 'Rent',
        budget: 350
    },
    {
        title: 'Market place',
        budget: 85
    },
    {
        title: 'Groceries',
        budget: 30
    },
    {
        title: 'Gas',
        budget: 250
    },
    {
        title: 'Travel',
        budget: 450
    },
    {
        title: 'Other',
        budget: 359
    },
    
]
};

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.use('/budget', (req, res) => {
    res.sendFile("C:\\week03\\personal-budget\\server.json");
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});