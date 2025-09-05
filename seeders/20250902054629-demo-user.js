module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Arjun',
        email: 'arjun@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'User',
        email: 'user@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
 
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};