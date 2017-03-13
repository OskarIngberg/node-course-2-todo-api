var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp' || 'mongodb://test:test@ds127300.mlab.com:27300/node-todo-api');
// mongoose.connect('mongodb://test:test@ds127300.mlab.com:27300/node-todo-api');


module.exports = {mongoose};