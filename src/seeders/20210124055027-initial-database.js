module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'databases',
      [
        {
          name: 'PostgreSQL',
          skilled: true,
          like: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'MySQL',
          skilled: false,
          like: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('databases', null, {});
  },
};
