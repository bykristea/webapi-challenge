const express = require('express');
// requiring express. 
const helmet = require('helmet');

const morgan = require('morgan');

const db = require('./data/dbConfig.js');
// calling/importing db from the dbConfig.js file

const projectRouter = require('./data/projectModelRouter');
const actionRouter = require('./data/actionRouter.js');
//importing router from projectModleRouter and actionRouter

const server = express();
//telling server to use express

server.use(
    express.json(),
    morgan('short'),
    helmet()
    );
//middleware to use

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);
//telling the url to use for each router

server.get('/', (req, res) => {
    res.send(`
        <h2>Welcome to Kristea's Sprint</h2>
        <p>Let's look at some projects</p>
    `)
});

module.exports = server;