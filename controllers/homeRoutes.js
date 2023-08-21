const router = require('express').Router();
const { Notes, User, Comments } = require('../models');
const withAuth = require('../utils/auth');

// GET all the notes for homepage
router.get('/', async (req, res) => {
  try {
    const noteData = await Notes.findAll({});

    const notes = noteData.map((project) => project.get({ plain: true }));

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
      include: [{
        model: User,
        attributes: ['username'],
      },{
        model: Comments,
        attributes: ['content']
      }]
    });
    const notes = noteData.map((note) => {
      const plainNote = note.get({ plain: true });
      plainNote.commentCount = plainNote.comments ? plainNote.comments.length : 0;
      return plainNote;
    });

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
