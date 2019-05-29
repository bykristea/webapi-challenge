const express = require('express');
const router = express.Router();
const db = require('./helpers/projectModel.js');

//return projects without actions
router.get('/', (req, res) => {
    db.get()
    .then(project => {
        res.json(project);
    })
    .catch(error =>{  
        res.status(500).json({
            message: "Error retrieving Projects"
        })
    })
})

//return all projects for specific id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.get(id)
      .then(project => {
        res.json(project);
      })
      .catch(error => 
        { 
            console.log(error);
            res.status(500).json({ 
            message: `Error retrieving your project with the id of ${id} ` }) 
        })
  });

  //retrieves actions for projects with given ID
router.get('/:id/actions', (req, res) => {
    const { id } = req.params;
    db.getProjectActions(id)
      .then(actions => {
        res.json(actions);
      })
      .catch(error => { res.status(500).json({ error: `Error retrieving your project with the id of ${id} ` }) })
  });
  
  //creates new project
  router.post('/', (req, res) => {
    const project = req.body;
    if (project.name && project.name.length < 180 && project.description) {
      db.insert(project)
        .then(((project) => {
          res.status(201).json(project)
        }))
        .catch(err => res.status(500).json({ error: "error posting your project" }))
    } else if (project.name.length > 180) {
      res.status(400).json({ error: "project description is too long" })
    } else {
      res.status(400).json({ error: "project name and project description required" })
    }
  
  });
  //deletes project with ID
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.remove(id)
      .then(count => {
        res.json({ message: `successfully deleted ${count} records` })
      })
  });
  //edits project
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const project = req.body;
    if (project.name && project.name.length < 180 && project.description) {
      db.update(id, project)
        .then(project => {
          res.json(project)
        })
        .catch(err => res.status(500).json({ error: "error editing your project" }))
    } else if (project.name.length > 180) {
      res.status(400).json({ error: "project description is too long" })
    } else {
      res.status(400).json({ error: "project name and project description required" })
    }
  })

module.exports = router;