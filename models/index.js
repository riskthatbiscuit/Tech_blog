const Notes = require('./Notes');
const Comments = require('./Comments');
const User = require('./User')


Notes.hasMany(Comments, {
  foreignKey: "noteId",
});

Comments.belongsTo(Notes, {
    foreignKey: "noteId"
})


module.exports = { Notes, User, Comments };
