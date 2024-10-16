/** Shared config for application; can be req'd many places. */

require('dotenv');

const SECRET_KEY = process.env.SECRET_KEY || 'development-secret-key';

const PORT = +process.env.PORT || 3000;

const BCRYPT_WORK_FACTOR = 10;

// Update the DB_URI to use the default postgres user
const DB_URI =
  process.env.NODE_ENV === 'test'
    ? 'postgresql://postgres:password@127.0.0.1:5432/bankly_test' // replace 'your_password' with the actual password
    : 'postgresql://postgres:password@127.0.0.1:5432/bankly'; // replace 'your_password' with the actual password

module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  DB_URI
};
