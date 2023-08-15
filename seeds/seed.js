const sequelize = require('../config/connection');
const seedNotes = require('./notesData')
const { User } = require('../models');

// const userData = require('./userData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedNotes();
  
  process.exit(0);
};

seedDatabase();
