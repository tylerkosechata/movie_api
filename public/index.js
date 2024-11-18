const express = require('express'),
  morgan = require('morgan');

let topMovies = [
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont'
  },
  {
    title: 'The Godfather',
    director: 'Francis Ford Coppola'
  },
  {
    title: 'The Dark Knight',
    director: 'Christopher Nolan'
  },
  {
    title: '12 Angry Men',
    director: 'Sidney Lumet'
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    director: 'Peter Jackson'
  },
  {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino'
  },
  {
    title: 'Citizen Kane',
    director: 'Orsen Welles'
  },
  {
    title: 'The Good, the Bad and the Ugly',
    director: 'J.K. Rowling'
  },
  {
    title: 'Forrest Gump',
    director: 'Robert Zemeckis'
  },
  {
    title: 'Casablance',
    director: 'Michael Curtis'
  },
];

// GET requests

app.use('/documentation.html', express.static('public'));

app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Welcome to my movie club!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use(express.static('public'));

const bodyParser = require('body-parser'),
  methodOverride = require('method-override');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());

app.use((err, req, res, next) => {
  // logic
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});