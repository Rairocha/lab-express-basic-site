const express = require('express');
 
// We create our own server named app
// Express server will be handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// our first Route
app.get('/home', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/atum', (request, response, next) => {
    response.sendFile(__dirname + '/views/atum-page.html');
  });

app.get('/gatinha', (request, response, next) => {
    response.sendFile(__dirname + '/views/gatinha-page.html');
  });

app.get('/kali', (request, response, next) => {
    response.sendFile(__dirname + '/views/kali-page.html');
  });

app.get('/pingo', (request, response, next) => {
    response.sendFile(__dirname + '/views/pingo-page.html');
  });

app.get('/toomanycats', (request, response, next) => {
    response.sendFile(__dirname + '/views/cats-about-page.html');
  });
// ... the previously added code
// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));