const mongoose = require('mongoose');

module.exports = function connectionFactory(x_tenant) {
  const conn = mongoose.createConnection(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    readPreference: 'primary',
    ssl: false,
    dbName: x_tenant,
  });

  conn.model('Person', require('../features/person/person.model'));  

  return conn;
};
