module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'tools',
      [
        {
          name: 'VS Code',
          skilled: true,
          like: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Git',
          skilled: true,
          like: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Vim',
          skilled: false,
          like: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Slack',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Jira',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Confluence',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Torello',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'VirtualBox',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Vagrant',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Docker',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Emacs',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Postman',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Swagger',
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
    await queryInterface.bulkDelete('tools', null, {});
  },
};
