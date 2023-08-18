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
        attributes: ['content', 'createdAt','userId','id'],
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

//POST comment
router.post("/:id", withAuth, async (req, res) => {
  try {

    const dbCommentData = await Comments.create({
      content: req.body.comment,
      noteId: req.params.id, 
      userId: req.session.user_id,
    });

    console.log(dbCommentData)
    res.redirect(`/note/${req.params.id}`);
    return;

  } catch (err) {
    res.status(500).json(err)
  }
});

// DELETE comment
router.delete("/comment/:id", withAuth, async (req,res) => {
  try {
    const commentId = req.params.id;

    const commentToDelete = await Comments.findByPk(commentId);

    if (!commentToDelete) {
      res.status(404).json({ message: "Comment not found" });
      return;
    }

    if (commentToDelete.userId !== req.session.user_id) {
      res.status(403).json({ message: "Unauthorized to delete this comment" });
      return;
    }

    await commentToDelete.destroy();

    res.status(200).json(commentsData);
  } catch (err) {
    res.status(500),json(err)
  }
})

module.exports = router;
