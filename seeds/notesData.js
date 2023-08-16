const { Notes } = require("../models");

const notedata = [
  {
    title: "Introduction to JavaScript",
    comment: "Learn the fundamentals of JavaScript programming.",
    username: "techlover",
    createdAt: new Date("2023-08-15T10:00:00Z"),
  },
  {
    title: "Getting Started with Node.js",
    comment: "Discover how to use Node.js for server-side development.",
    username: "devmaster",
    createdAt: new Date("2023-08-14T12:00:00Z"),
  },
  {
    title: "Frontend Frameworks Comparison",
    comment:
      "Compare popular frontend frameworks like React, Angular, and Vue.",
    username: "frontendguru",
    createdAt: new Date("2023-08-13T15:00:00Z"),
  },
  {
    title: "Building RESTful APIs with Express",
    comment: "Learn how to build RESTful APIs using the Express framework.",
    username: "apideveloper",
    createdAt: new Date("2023-08-12T18:00:00Z"),
  },
  {
    title: "Database Design for Web Applications",
    comment:
      "Explore best practices for designing databases in web applications.",
    username: "dbwizard",
    createdAt: new Date("2023-08-11T20:00:00Z"),
  },
];

const seedNotes = () => Notes.bulkCreate(notedata);

module.exports = seedNotes;
