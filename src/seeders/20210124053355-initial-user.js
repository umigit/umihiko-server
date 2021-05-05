module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'test-user',
          email: 'test@test.com',
          cognito_user_id: 'test',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'demo-user',
          email: 'demo@demo.com',
          cognito_user_id: 'demo',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'umihiko',
          email: 'umi-amanuma@die-katze.net',
          cognito_user_id: 'umi',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
