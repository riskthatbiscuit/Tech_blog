const Notes = require('./Notes');
const Comments = require('./Comments');
const User = require('./User')


Notes.hasMany(Comments, {
  foreignKey: "noteId",
});

Comments.belongsTo(Notes, {
    foreignKey: "noteId"
})

User.hasMany(Notes, {
  foreignKey:"userId"
})

Notes.belongsTo(User, {
  foreignKey: "userId",
})

User.hasMany(Comments, {
  foreignKey: "userId",
});

Comments.belongsTo(User, {
  foreignKey: "userId",
});


module.exports = { Notes, User, Comments };
