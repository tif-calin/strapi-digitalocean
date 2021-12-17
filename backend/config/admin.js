module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ee1356b47b91711d9427b09277967798'),
  },
});
