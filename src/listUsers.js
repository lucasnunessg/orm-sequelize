const { UserModel } = require('./models');

(async () => {
    const users = await UserModel.findAll();
    console.log(users);
})();