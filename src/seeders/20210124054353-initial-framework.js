module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'frameworks',
      [
        {
          name: 'Vue.js',
          skilled: true,
          like: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Express',
          skilled: false,
          like: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'React',
          skilled: false,
          like: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Nuxt.js',
          skilled: true,
          like: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Ruby on Rails',
          skilled: true,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Django',
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
    await queryInterface.bulkDelete('frameworks', null, {});
  },
};
