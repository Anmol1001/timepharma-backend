export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'default'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'KWw2y9b39ZyzTacMxsuN+A=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'default'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
