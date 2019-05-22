const express = require('express');
const router = express.Router();
const db = require('./helpers/actionModel.js');


//getting all actions for all project ids
router.get('/', (req, res) => {
    db.get()
      .then(actions => {
        res.json(actions);
      })
      .catch(error => 
        { 
            console.log(error);
            res.status(500).json({ 
            message: "Error getting your actions" }) 
        })
  });

  //add a new action for project id
  router.post('/', (req, res) => {
    const action = req.body;
    if (action.project_id && action.description.length < 128 && action.description && action.notes) {
      db.insert(action)
        .then(((action) => {
          res.status(201).json(action)
        }))
        .catch(error => res.status(500).json({ error: "error posting your action" }))
    } else if (action.description.length > 128) {
      res.status(400).json({ error: "action description is too long" })
    } else {
      res.status(400).json({ error: "action name and action description required" })
    }
  });

  //delete an action
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.remove(id)
      .then(count => {
        res.json({ message: `successfully deleted ${count} actions` })
      })
  });


  //edit an action
  router.put('/:id', (req, res) => {
    const action = req.body;
  const { project_id, description, notes } = req.body;
  const {id} = req.params
  if (action.project_id && action.description.length < 128 && action.description && action.notes) {
    db.update(id, action)
      .then(((action) => {
        res.status(200).json(action)
      }))
      .catch(err => res.status(500).json({ error: "error editing your action" }))
  } else if (action.description.length > 128) {
    res.status(400).json({ error: "action description is too long" })
  } else {
    res.status(400).json({ error: "action name and action description required" })
  }
});

  module.exports = router;