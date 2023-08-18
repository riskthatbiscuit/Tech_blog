const router = require("express").Router();
const sequelize = require("sequelize");
const {Notes, Comments} = require("../models");
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

    const commentsData = await Comments.findAll({
      where: {
        noteId: noteID
      }
    })

    // console.log(commentsData)
    const comments = commentsData.map((comment) => comment.get({ plain: true }));
    console.log(comments)


    res.render('note', {
      note, comments,
      loggedIn: req.session.loggedIn,
    });
    return;
  } catch (err) {
    console.log("ERROR")
    res.status(500).json(err);
  }
});

module.exports = router;
