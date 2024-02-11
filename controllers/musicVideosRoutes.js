const router = require('express').Router();

// TODO: ideally we wouldn't hardcode our stuff here like this, but we would include it in the database.
router.get('/', (req, res) => {
    const videos = [
      {
        title: "Hold Shit Down",
        description: "A hype song with an even crazier video",
        embedUrl: "https://youtube.com/embed/rAFPHdAOU0g"
      },
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
    res.render('music-videos', { videos, logged_in: req.session.logged_in }, );
  });

module.exports = router;