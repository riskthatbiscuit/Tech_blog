const { Notes } = require("../models");

const noteData = [
  {
    title: "JavaScript Secrets",
    note: "Unlock the hidden power of JavaScript with these advanced techniques and tips.",
    user: 1,
  },
  {
    title: "Bootstrap Hacks",
    note: "Discover clever tricks and shortcuts to enhance your Bootstrap development workflow.",
    user: 1,
  },
  {
    title: "Frontend Frameworks Comparison",
    note: "Explore the pros and cons of popular frontend frameworks like React, Angular, and Vue.",
    user: 2,
  },
  {
    title: "Web Accessibility Essentials",
    note: "Learn how to create inclusive and accessible web experiences for all users.",
    user: 2,
  },
  {
    title: "Optimizing Website Performance",
    note: "Boost your website's speed and performance with optimization techniques and best practices.",
    user: 3,
  },
];


const seedNotes = () => Notes.bulkCreate(noteData);

module.exports = seedNotes;
