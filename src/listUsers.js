const { User } = require('./models/user.model'); 

(async () => {
    const users = await User.findAll(); 
    console.log(users);
})();
