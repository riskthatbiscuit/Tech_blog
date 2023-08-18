const { Comments } = require("../models");

const commentData = [
  { content: "Comment 1 for Sal", noteId: 1, userId: 2 },
  { content: "Comment 2 for Sal", noteId: 1, userId: 3 },
  { content: "Comment 1 for Lernantino", noteId: 2, userId: 1 },
  { content: "Comment 2 for Lernantino", noteId: 2, userId: 1 },
  { content: "Comment 1 for Amiko", noteId: 3, userId: 2},
  { content: "Comment 2 for Amiko", noteId: 3, userId: 1 },
  { content: "Comment 1 for Jordan", noteId: 4, userId: 2},
  { content: "Comment 2 for Jordan", noteId: 4, userId: 1},
  { content: "Comment 1 for Blake", noteId: 5, userId: 1 },
  { content: "Comment 2 for Blake", noteId: 5, userId: 1 },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
