const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const app = express();

// static files & template engines
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); // Deprecated
app.use(express.urlencoded({ extended: true })); // New

// Routes
const newsRouter = require('./routes/news');
app.use('/', newsRouter);
app.use('/article', newsRouter);

app.get('/', (req, res) => {
  res.send('<h1>All working</h1>');
});

app.listen(port, () => console.log(`App running on ${port}`));
