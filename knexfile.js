module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/apples'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};