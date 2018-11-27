const path = require('path')


module.exports = {

  development: {
    client: 'postgresql',
    connection: `postgresql://localhost/movies_dev`,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
};