const routes = require('./controllers/burgers_controller.js');
const exphbs = require('express-handlebars');
const express = require('express');

const PORT = process.env.PORT || 8010;
const app = express();

////////////////////////////////////////////////////////////////////
// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

////////////////////////////////////////////////////////////////////
// Templates
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(PORT, function () {
  console.log('Server listening on: http://localhost:' + PORT);
});