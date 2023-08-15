const { Notes } = require('../models');

const notedata = [
  {
    "title": "Sal",
    "comment": "sal@hotmail.com",
  },
  {
    "title": "Lernantino",
    "comment": "lernantino@gmail.com",
  },
  {
    "title": "Amiko",
    "comment": "amiko2k20@aol.com",
  },
  {
    "title": "Jordan",
    "comment": "jordan99@msn.com",
  },
  {
    "title": "Blake",
    "comment": "the_blake@yahoo.com",
  }
];

const seedNotes = () => Notes.bulkCreate(notedata);

module.exports = seedNotes;
