const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        fullName: DataTypes.STRING,
        email: DataTypes.STRING,
        phoneNum: DataTypes.STRING,
    }, {
        tableName: 'Userss', // Definindo o nome da tabela
    });

    return User;
};

module.exports = {
    UserModel,
};
