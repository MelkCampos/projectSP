
// graphql-yoga: baseado em Express
const { GraphQLServer } = require('graphql-yoga');
const path = require('path');

// 'Controllers'
const resolvers = require('./resolvers/resolvers');

// Database
const mongoose = require('mongoose'); 

mongoose.connect('mongodb://localhost:27017/zombieproject', {

    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const server = new GraphQLServer({ 

    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
 });



 server.start(); 