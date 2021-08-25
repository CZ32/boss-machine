const express = require('express');

const meetingsRouter = express.Router();

module.exports = meetingsRouter;

const {
 addToDatabase,
 getAllFromDatabase,
 createMeeting,
 deleteAllFromDatabase,
} = require('./db');

//Getting all meetings
meetingsRouter.get('/', (req, res, next) => {
 res.send(getAllFromDatabase('meetings'));
});

//Post a new meeting
meetingsRouter.post('/', (req, res, next) => {
 const newMeeting = addToDatabase('meetings', createMeeting());
 res.status(201).send(newMeeting);
});

//Delete all meetings
meetingsRouter.delete('/', (req, res, next) => {
  const deleteIdea = deleteAllFromDatabase('meetings');
  if(deleteIdea){
    res.status(204).send();
  } else {
    res.status(500).send();
  }
});
