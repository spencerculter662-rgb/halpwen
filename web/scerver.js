//this is the main server

// to start server
// node web/scerver.js

const express = require('express');
const app = express();

const path =require("path");
const port2 = 3020;
const return_port = 3030;


app.use(express.json());
app.use(express.static(__dirname));

app.post('/data', (req, res) => {
    console.log('received data:', req.body);
    res.json({ status: 'success', message: 'conectid' });
});

app.post('/api/endpoint', (req, res) => {
  const clientData = req.body;
  console.log("Received from client:", clientData);

  if (clientData.power === "on") {
    console.log("this is a test data");
  }

  

  res.json({ status: "Success", received: clientData });
});



//give the cliant the html server

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

app.listen(port2, () => {
    console.log(`Server is running at http://localhost:${port2}`);
});


// the conecshin for the python server that is runing the controer inputs 
app.listen(3000, () => console.log('Node.js server running on port 3000'));
