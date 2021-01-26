const express = require('express');
const ideasRouter = express.Router();

const {
 createMeeting,
 getAllFromDatabase,
 getFromDatabaseById,
 addToDatabase,
 updateInstanceInDatabase,
 deleteFromDatabasebyId,
 deleteAllFromDatabase,
} = require('./db.js');

module.exports = ideasRouter;

ideasRouter.param('id', (req, res, next, id) => {
 const idea = getFromDatabaseById('ideas', id);
 if (idea) {
  req.idea = idea;
  next();
 } else {
  res.status(404).send();
 }
});

ideasRouter.get('/', (req, res, next) => {
 res.send(getAllFromDatabase('ideas'));
});

ideasRouter.post('/', (req, res, next) => {
 const newIdea = req.body;
 res.status(201).send(addToDatabase('ideas', newIdea));
});

ideasRouter.get('/:id', (req, res, next) => {
 res.status(200).send(req.idea);
});

ideasRouter.put('/:id', (req, res, next) => {
 res.status(202).send(updateInstanceInDatabase('ideas', req.body));
});

ideasRouter.delete('/:id', (req, res, next) => {
 const deleteIdea = deleteFromDatabasebyId('ideas', req.params.id);
 if (deleteIdea) {
  res.status(204);
 } else {
  res.status(500);
 }
 res.send();
});

