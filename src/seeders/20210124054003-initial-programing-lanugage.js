module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'programing_languages',
      [
        {
          name: 'JavaScript',
          skilled: true,
          like: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'C',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'C#',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Python3',
          skilled: false,
          like: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Ruby',
          skilled: true,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'PHP',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('programing_languages', null, {});
  },
};
