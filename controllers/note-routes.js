const router = require("express").Router();
const {Notes, Comments, User} = require("../models");
const withAuth = require("../utils/auth");


//GET note details and notes
router.get("/:id", withAuth, async (req, res) => {
  try {
    const noteID = req.params.id;
    
    const notesData = await Notes.findByPk(noteID, {
      include: [{
        model: Comments,
        attributes: ['content', 'createdAt','userId'],
        include: {
          model: User, 
          attributes:['username'],
        }
      }, {
        model: User, 
        attributes: ['username']
      }]
    });
    
    const note = notesData.get({ plain: true });
    console.log(note)
    res.render('note', {
      note,
      loggedIn: req.session.loggedIn,
    });
    return;
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
