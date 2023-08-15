const router = require('express').Router();
const { Notes } = require('../models');
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
    res.render('homepage', { notes });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
