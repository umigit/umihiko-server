module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'services',
      [
        {
          name: 'GitHub',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'GitLab',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'AWS EC2',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'AWS S3',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'AWS CloudFront',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'AWS Route 53',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'AWS CodePipeline',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Netlify',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Heroku',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'ConoHa VPS',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Contentful',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'GCP AutoML Vision',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Google Maps',
          skilled: false,
          like: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'ZENRIN いつもNAVI',
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
    await queryInterface.bulkDelete('services', null, {});
  },
};
