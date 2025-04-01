export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', "m5rgKN8CLFzMH8/jhqOd3A=="),
    },
  },
});
