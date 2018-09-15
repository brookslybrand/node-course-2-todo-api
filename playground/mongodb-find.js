const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b9d3dcf01cf95c8a93eca65')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // })
    // .catch((err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    })
    .catch((err) => {
        console.log('Unable to fetch count', err);
    })

    db.collection('Users').find({name: 'Brooks'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2))
    })
    .catch((err) => {
        console.log('Unable to fetch users', err);
    })
    
    // client.close();
});
