const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '58c2b7cdd6d8e9ed7bee1e5b'}).then((todo)=>{

});

Todo.findByIdAndRemove('58c2b7cdd6d8e9ed7bee1e5b').then((todo) =>{
    console.log(todo);
});