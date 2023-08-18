const router = require("express").Router();
const sequelize = require("sequelize");
const { Notes, Comments} = require("../models");
require("dotenv").config();
const withAuth = require("../utils/auth");


//GET note details and notes
router.get("/:id", withAuth, async (req, res) => {
  try {
    const noteID = req.params.id;
    const notesData = await Notes.findByPk(noteID);
    const note = notesData.get({ plain: true });
    console.log("here it is!")
    console.log(notesData)
    res.render('note', {
      note: note,
      loggedIn: req.session.loggedIn,
    });
    return;
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
