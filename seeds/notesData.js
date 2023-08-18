const { Notes } = require("../models");

const noteData = [
  {
    title: "Sal",
    note: "sal@hotmail.com",
    username: "user1",
  },
  {
    title: "Lernantino",
    note: "lernantino@gmail.com",
    username: "user2",
  },
  {
    title: "Amiko",
    note: "amiko2k20@aol.com",
    username: "user3",
  },
  {
    title: "Jordan",
    note: "jordan99@msn.com",
    username: "user4",
  },
  {
    title: "Blake",
    note: "the_blake@yahoo.com",
    username: "user5",
  },
];


const seedNotes = () => Notes.bulkCreate(noteData);

module.exports = seedNotes;
