module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        uri: env("DATABASE_URI", ""),
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "possue-local"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "Accusync70"),
        ssl: "required",
        // ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
