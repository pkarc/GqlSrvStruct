module.exports = (env) => {
  switch (env) {
    case 'development':
      return {
        name: 'GqlSrv development',
        port: process.env.API_PORT || 4000,
        jwt: {
          secret: process.env.JWT_SECRET
        },
        cors: {
          origin: '*'
        }
      };

    case 'production':
      return {
        name: 'GqlSrv production',
        port: process.env.API_PORT || 80,
        jwt: {
          secret: process.env.JWT_SECRET
        },
        cors: {
          origin: '*'
        }
      };

    default:
      return process.exit(1);
  }
};
