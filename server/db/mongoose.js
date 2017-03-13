var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect('mongodb://test:test@ds127300.mlab.com:27300/node-todo-api');


module.exports = {mongoose};