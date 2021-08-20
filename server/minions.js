const express = require('express')
const minionsRouter = express.Router()

module.exports = minionsRouter

const {
	getAllFromDatabase,
	addToDatabase,
	updateInstanceInDatabase,
	deleteFromDatabasebyId,
	getFromDatabaseById,
} = require('./db.js')

minionsRouter.param('minionId', (req, res, next, id) => {
	const minion = getFromDatabaseById('minions', id)
	if (minion) {
		req.minion = minion
		next()
	} else {
		res.status(404).send()
	}
})

//GET request to retreive array of all minions
minionsRouter.get('/', (req, res, next) => {
	res.status(200).send(getAllFromDatabase('minions'))
})

//POST create new minion and save it to the database
minionsRouter.post('/', (req, res, next) => {
	const newMinion = addToDatabase('minions', req.body)
	res.status(201).send(newMinion)
})
//Get an individual minion from the database
minionsRouter.get('/:minionId', (req, res, next) => {
	res.status(200).send(req.minion)
})
//Update a minion to the data base
minionsRouter.put('/:minionId', (req, res, next) => {
	let updateMinion = updateInstanceInDatabase('minions', req.body)
	res.status(202).send(updateMinion)
})
//Delete minion from the database
minionsRouter.delete('/:minionId', (req, res, next) => {
	const deleteMinion = deleteFromDatabasebyId('minions', req.params.minionId)
	if (deleteMinion) {
		res.status(204).send()
	} else {
		res.status(404).send()
	}
})

//Get all of minons work
minionsRouter.get('/:minionId/work', (req, res, next) => {
	const work = getAllFromDatabase('work').filter(job => {
		return job.id === req.params.minionId
	})
	res.send(work)
})

//Post new work for a minion
minionsRouter.post('/:minionId/work', (req, res, next) => {
	const newWork = addToDatabase('work', req.body)
	res.status(201).send(newWork)
})

//Route id to workId
minionsRouter.param('workId', (req, res, next, id) => {
	const work = getFromDatabaseById('work', id)
	if (work) {
		req.work = work
		next()
	} else {
		res.status(404).send()
	}
})

//Update minion work.
minionsRouter.put('/:minionId/work/:workId', (req, res, next) => {
	if (req.params.minionId !== req.body.minionId) {
		res.status(400).send()
	} else {
		const updateWork = updateInstanceInDatabase('work', req.body)
		res.send(updateWork)
	}
})

//Delete work from database. 
minionsRouter.delete('/:minionId/work/:workId', (req, res, next) => {
	const deleted = deleteFromDatabasebyId('work', req.params.workId)
	if (deleted) {
		res.status(204).send()
	} else {
		res.status(500).send()
	}
})
