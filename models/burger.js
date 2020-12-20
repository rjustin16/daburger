const orm = require('../config/orm.js');

const burger = {
  selectAll(cb) {
    orm.selectAll('burgers', res => cb(res));
  },
  insertOne(value, cb) {
    orm.insertOne('burgers', 'burger_name', res => cb(res), value);
  },
  updateOne(id, value, cb) {
    orm.updateOne('burgers', 'devoured', value, 'id', id, res => cb(res));
  },
};

module.exports = burger;