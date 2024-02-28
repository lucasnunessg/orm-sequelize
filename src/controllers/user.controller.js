const { User } = require('../models/index.js');


const getAll = async () => {
  const users = await User.findAll();

  return users;
};

module.exports = {
  getAll,
};