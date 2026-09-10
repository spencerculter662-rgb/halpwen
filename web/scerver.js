//this is the main server

const express = require('express');
const app = express();

const path =require("path");
const port2 = 3020;


app.use(express.json());

app.post('/data', (req, res) => {
    console.log('received data:', req.body);
    res.json({ status: 'success', message: 'conectid' });
});

//give the cliant the html server

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

app.listen(port2, () => {
    console.log(`Server is running at http://localhost:${port2}`);
});

app.listen(3000, () => console.log('Node.js server running on port 3000'))