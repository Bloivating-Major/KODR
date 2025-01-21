- we use a pkg known as mongoose to connect our database to server.

- Step 1 Creating a production level setup
    1. npm init -y
    2. update your entry point
    3. npm i express
    4. creating app.js in src folder
    5. npm i nodemon
- Step 2 Connecting to MongoDB
    1. npm i mongoose
    2. mongoose.connect('mongodb://0.0.0.0/kodr).then(()=>{
        console.log('Connecting to MongoDB');
    }).catch(err => console.log('Error connecting to MongoDB'))
    3. require this in server.js
- Step 3 Creating a schema
    1. in your db.js