const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use(express.static(__dirname + '/build'));

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
  });
  app.get('/auth', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
  });
  
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log("----------------------Login-------------------------");
  console.log("username: "+ username);
  console.log("password: "+ password);
  console.log("--------------------------------------------------------");
  res.send('Received');
});
app.post('/auth', (req, res) => {
  const {code} = req.body;
  console.log("----------------------Code-------------------------");
  console.log("code: "+ code);
  console.log("--------------------------------------------------------");
  res.send('Received');
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});