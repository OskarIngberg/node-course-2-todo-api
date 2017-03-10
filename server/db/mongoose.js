var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test@ds127300.mlab.com:27300/node-todo-api' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};