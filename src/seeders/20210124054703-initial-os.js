module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'operating_systems',
      [
        {
          name: 'Linux(Ubuntu, CentOS, Alpine, Amazon Linux 2, etc.)',
          skilled: true,
          like: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'macOS',
          skilled: true,
          like: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Windows',
          skilled: true,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('operating_systems', null, {});
  },
};
