module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'fastfeet',
  database: 'fastfeetpostgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
