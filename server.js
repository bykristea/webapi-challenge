const express = require('express');
// requiring express. 
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const server = express();

// const db = require('./data/dbConfig.js');
// calling/importing db from the dbConfig.js file

const projectRouter = require('./data/projectModelRouter');
const actionRouter = require('./data/actionRouter.js');
//importing router from projectModelRouter and actionRouter

//telling server to use express

server.use(express.json());
server.use(morgan('short'));    server.use(helmet());
server.use(cors());

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