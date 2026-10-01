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

app.post('/api/endpoint', async (req, res) => {
  try {
    const pythonResponse = await fetch('http://127.0.0.1:3040/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    if (!pythonResponse.ok) {
      return res.status(502).json({ error: 'Python receiver failed' });
    }

    res.json({ status: 'forwarded', received: await pythonResponse.json() });
  } catch (error) {
    console.error('Could not reach Python:', error);
    res.status(502).json({ error: 'Python server is not running' });
  }
});


//give the cliant the html server

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});

app.listen(port2, () => {
    console.log(`Server is running at http://localhost:${port2}`);
});


