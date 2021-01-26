const express = require('express');
const minionsRouter = express.Router();

module.exports = minionsRouter;

const {
 getAllFromDatabase,
 addToDatabase,
 updateInstanceInDatabase,
 deleteFromDatabasebyId,
 getFromDatabaseById,
} = require('./db.js');

minionsRouter.param('minionId', (req, res, next, id) => {
 const minion = getFromDatabaseById('minions', id);
 if (minion) {
  req.minion = minion;
  next();
 } else {
  res.status(404).send();
 }
});

//GET request to retreive array of all minions
minionsRouter.get('/', (req, res, next) => {
 res.status(200).send(getAllFromDatabase('minions'));
});

//POST create new minion and save it to the database
minionsRouter.post('/', (req, res, next) => {
 const newMinion = addToDatabase('minions', req.body);
 res.status(201).send(newMinion);
});

minionsRouter.get('/:minionId', (req, res, next) => {
 res.status(200).send(req.minion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
 let updateMinion = updateInstanceInDatabase('minions', req.body);
 res.status(202).send(updateMinion);
});

minionsRouter.delete('/:minionId', (req, res, next) => {
 const deleteMinion = deleteFromDatabasebyId('minions', req.params.minionId);
 if (deleteMinion) {
  res.status(204).send();
 } else {
  res.status(404).send();
 }
});
