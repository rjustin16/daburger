const connection = require('./connection.js');
const util = require('util');

connection.query = util.promisify(connection.query);

const orm = {
  selectAll(table, cb) {
    return connection.query('SELECT * FROM ??', [table], (err, res) =>
      err ? console.log(err) : cb(res)
    );
  },
  insertOne(table, column, cb, ...values) {
    return connection.query(
      'INSERT INTO ?? (??) VALUES (?)',
      [table, column, values.join(', ')],
      (err, res) => (err ? console.log(err) : cb(res))
    );
  },
  updateOne(table, col1, val1, col2, val2, cb) {
    return connection.query(
      "UPDATE ?? SET ??='?' WHERE ??=?",
      [table, col1, val1, col2, val2],
      (err, res) => (err ? console.log(err) : cb(res))
    );
  },
};

module.exports = orm;