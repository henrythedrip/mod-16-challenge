// Importing a bunch of packages and handlers
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config()

// the example had a 'getEmoji' function but eventually we might want to have some helpers.
// const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');

// Express is our webserver, handling HTTP requests. This section initializes the web server.
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess))

const hbs = exphbs.create({});

// Setting app engine and view engine (allowing ourselves to use templates)
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// This is our middleware (software run by webserver each time a request is made)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

// Creates router that knows which handler to use
app.use(routes);

// Start the server
//https://localhost:3001
// Waiting for our database connection before starting our webserver
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${process.env.PORT}`));
});

