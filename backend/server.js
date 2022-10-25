const express = require('express');
const dotenv = require('dotenv').config();


const port = process.env.PORT || 4001;

const app = express();


app.get('/api/goals', (req, res) => {
    res.send('Get goals');
});

app.listen(port, () => console.log(`server started on port ${port}`));

