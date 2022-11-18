require("dotenv").config()

module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "y4xhe4o8w0311ozz",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "mysql"
  }
}
