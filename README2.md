# Boss Machine 

## Tech-stack

React, Node.js, Express.js, SQLite. 

### Project Overview

In this project, I created an entire API to serve information to a Boss Machine, a unique management application for today's most accomplished (evil) entrepreneurs. 

Project has come from Codecademy, completed when partaking web development pathway course. I completed everything from within the server directory and server.js, as the goal of this project was to simply learn how to create a backend API in Express.js.

The rest is boilerplate code provided by <a href="https://s3.amazonaws.com/codecademy-content/PRO/skill-paths/backend-javascript/projects/boss-machine/project-4-boss-machine-start.zip" target="_blank">Codecademy</a>

![Video of boss-machine](https://s3.amazonaws.com/codecademy-content/programs/build-apis/solution-videos/BossMachine480.mov) 

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

You can view a video demonstration of the final app here:

