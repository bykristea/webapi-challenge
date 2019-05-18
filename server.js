const express = require('express');
// requiring express. 

const db = require('./data/dbConfig.js');
// calling/importing db from the dbConfig.js file

const server = express();
//telling server to use express

server.use(express.json());
//using express.json so 

server.get('/', (req, res) => {
    res.send(`
        <h2>Welcome to Kristea's Sprint</h2>
        <p>Let's look at some projects</p>
    `)
});

module.exports = server;