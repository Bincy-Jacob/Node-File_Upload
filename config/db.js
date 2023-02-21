const mongoose = require('mongoose');

const { connect, connection } = mongoose;
mongoose.set('strictQuery', false);
connect(process.env.DB_URL);

connection.on('connected', () => console.log('DB connected sucessfully'));
connection.on('error', (err) => console.log('ERROR: ', err));

module.exports = connection;
