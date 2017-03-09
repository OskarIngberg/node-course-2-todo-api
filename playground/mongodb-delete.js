// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
        // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
        //     console.log(result);
        // });
    //deleteOne
        // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((results) =>{
        //     console.log(results);
        // })
    // findOneAndDelet
        // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
        //     console.log(result);
        // });

    // db.collection('Users').deleteMany({name: 'Oskar'});

    db.collection('Users').findOneAndDelete({_id: new ObjectID("58c11ed340e0353558a61f05")}).then((results) =>{
        console.log(JSON.stringify(results, undefined, 2));
    });


    // db.close();
});

