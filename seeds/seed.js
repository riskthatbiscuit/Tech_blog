const sequelize = require('../config/connection');
const seedNotes = require('./notesData')
const userData = require('./userData');
const commentData = require('./commentsData')
// const { User } = require('../models');

// const userData = require('./userData');
console.log(1)

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    await userData();
    await seedNotes();
    await commentData();
    process.exit(0);
  } catch (error) {
    console.error("Error while seeding the database:", error);
    process.exit(1);
  }
};

seedDatabase();
