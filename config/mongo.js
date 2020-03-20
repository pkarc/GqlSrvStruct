module.exports = (env) => {
  switch (env) {
    case 'development':
      return {
        database: process.env.MONGO_DB_NAME,
        host: process.env.MONGO_SERVER
      };

    case 'production':
      return {
        database: process.env.MONGO_DB_NAME,
        host: process.env.MONGO_SERVER
      };
  }
};
