const { Comments } = require("../models");

const commentData = [
  { content: "Comment 1 for Sal", noteId: 1 },
  { content: "Comment 2 for Sal", noteId: 1 },
  { content: "Comment 1 for Lernantino", noteId: 2 },
  { content: "Comment 2 for Lernantino", noteId: 2 },
  { content: "Comment 1 for Amiko", noteId: 3 },
  { content: "Comment 2 for Amiko", noteId: 3 },
  { content: "Comment 1 for Jordan", noteId: 4 },
  { content: "Comment 2 for Jordan", noteId: 4 },
  { content: "Comment 1 for Blake", noteId: 5 },
  { content: "Comment 2 for Blake", noteId: 5 },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
