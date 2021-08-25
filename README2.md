# Boss Machine 

## Tech-stack

React, Node.js, Express.js, SQLite. 

### Project Overview

In this project, I created an entire API to serve information to a Boss Machine, a unique management application for today's most accomplished (evil) entrepreneurs. 

Project has come from Codecademy, completed when partaking web development pathway course. I completed everything from within the server directory and server.js, as the goal of this project was to simply learn how to create a backend API in Express.js.

The rest is boilerplate code provided by <a href="https://s3.amazonaws.com/codecademy-content/PRO/skill-paths/backend-javascript/projects/boss-machine/project-4-boss-machine-start.zip" target="_blank">Codecademy</a>

### Key Features 

Create routes to:

1. Add, remove and manage my 'minions' from sqlite database.
2. Add, remove and manage my brilliant 'million dollar ideas' from sqlite database.
3. Handle all the annoying meetings that keep getting added to my busy schedule.

### learning Objectives

* Learn how to build RESTful API, utilising Express.js 
* Lean how to build custom middleware 
* Understanding API Routers in Express.js
* Configuring Express route parameters. 
* Setting up sqLite3 database locally.

### Routes

- `/api/minions`
  - GET /api/minions to get an array of all minions.
  - POST /api/minions to create a new minion and save it to the database.
  - GET /api/minions/:minionId to get a single minion by id.
  - PUT /api/minions/:minionId to update a single minion by id.
  - DELETE /api/minions/:minionId to delete a single minion by id.
- `/api/ideas`
  - GET /api/ideas to get an array of all ideas.
  - POST /api/ideas to create a new idea and save it to the database.
  - GET /api/ideas/:ideaId to get a single idea by id.
  - PUT /api/ideas/:ideaId to update a single idea by id.
  - DELETE /api/ideas/:ideaId to delete a single idea by id.
- `/api/meetings`
  - GET /api/meetings to get an array of all meetings.
  - POST /api/meetings to create a new meeting and save it to the database.
  - DELETE /api/meetings to delete _all_ meetings from the database.

#### Schemas

- Minion:
  - id: string
  - name: string
  - title: string
  - salary: number
- Idea
  - id: string
  - name: string
  - description: string
  - numWeeks: number
  - weeklyRevenue: number
- Meeting
  - time: string
  - date: JS `Date` object
  - day: string
  - note: string

### Helper functions

`getAllFromDatabase`:

- Takes only the single argument for model name. Returns the array of elements in the database or `null` if an invalid argument is supplied

`getFromDatabaseById`:

- Takes the model name argument and a second string argument representing the unique ID of the element. Returns the instance with valid inputs and `-1` with an invalid id.

`addToDatabase`:

- Takes the model name argument and a second argument which is an object with the key-value pairs of the new instance. `addToDatabase` handles assigning `.id` properties to the instances. It does not check to make sure that valid inputs are supplied, so you will have to add those checks to your routes if necessary. `addToDatabase` will return the newly-created instance from the database. This function will validate the schema of the instance to create and throw an error if it is invalid.

`updateInstanceInDatabase`:

- Takes the model name argument and a second argument which is an object representing an updated instance. The instance provided must have a valid `.id` property which will be used to match. `updateInstanceInDatabase` will return the updated instance in the database or `null` with invalid inputs. This function will validate the schema of the updated instance and throw an error if it is invalid.

`deleteFromDatabasebyId`:

- Takes the model name argument and a second string argument representing the unique ID of the element to delete. Returns `true` if the delete occurs properly and `false` if the element is not found.

`deleteAllFromDatabase`:

- Takes only the single argument for model name. Deletes all elements from the proper model and returns a new, empty array. You will only need to use this function for a /api/meetings route.

### Getting Started 

1. Once you have the project downloaded, you'll need to run some terminal commands to get the application started. 
2. First, open the root project directory in your terminal. 
3. Run `npm install` to install the dependencies of this project and build the front-end application. 
4. Once it has finished installing, you can run `npm run start` to begin your server.You'll see `Server listening on port 4001` in the terminal.
5. Open public/index.html in the browser to interact with application. 

### How to use boss machine 

![Gif showing how to use boss machine](https://github.com/CZ32/boss-machine/blob/readme/public/img/boss-machine.gif)

### Challenges 

* Understanding API routers in Express.js for the first time. Followed additional materials to get to grips around this.
