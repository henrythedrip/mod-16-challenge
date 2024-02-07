// Importing a bunch of packages and handlers
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// the example had a 'getEmoji' function but eventually we might want to have some helpers.
// const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');

// Express is our webserver, handling HTTP requests. This section initializes the web server.
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

// Setting app engine and view engine (allowing ourselves to use templates)
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// This is our middleware (software run by webserver each time a request is made)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Creates router that knows which handler to use
app.use(routes);

// Waiting for our database connection before starting our webserver
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// Define routes
app.get('/music-videos', (req, res) => {
  const videos = [
    {
      title: "Light Sounds (feat. UA The Duo)",
      description: "A dynamic collaboration with UA The Duo",
      embedUrl: "https://www.youtube.com/embed/g9ujuI1o8jM"
    },
    {
      title: "Down to Ride",
      description: "A catchy and irreverent song filmed at FICE Gallery.",
      embedUrl: "https://www.youtube.com/embed/xae9OozYjxk"
    },
    {
      title: "11:11",
      description: "A psychedelic inter-galactic experience bruh",
      embedUrl: "https://www.youtube.com/embed/nJy3iHPxIDo"
    }
  ];

  // Render the music-videos.handlebars template with the videos data
  res.render('music-videos', { videos });
});

// Add more routes as needed

// Start the server


