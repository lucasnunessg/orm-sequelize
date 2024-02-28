const { User } = require('./models');

(async () => {
    const findUsersByPk = await User.findByPk(1);
    console.log(findUsersByPk);
})();