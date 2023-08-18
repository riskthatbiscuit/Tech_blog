const router = require('express').Router();
const { Notes, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all the notes for homepage
router.get('/', async (req, res) => {
  try {
    // Get all notes, sorted by name
    const noteData = await Notes.findAll({});

    // Serialize note data so templates can read it
    const notes = noteData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('homepage', {
      notes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});


router.get("/dashboard", async (req, res) => {
  if (req.session.loggedIn) {
    const noteData = await Notes.findAll({
      include: {
        model: User,
        attributes: ['username'],
      },
    });
    const notes = noteData.map((note) => note.get({ plain: true }));
    console.log(notes)
    res.render("dashboard", {
    notes,
    loggedIn: req.session.loggedIn,
  })
    return;
  }
  res.render("login");
});

module.exports = router;
