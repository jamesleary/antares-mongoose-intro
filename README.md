# Antares Mongoose Intro (completed lecture repo)
An overview for today's Mongoose lecture.

We are starting with an application that will run and serve our
index page with `npm start`. Some of the client-side markup is completed.

We will complete this application using Angular and Mongoose.

## Agenda

1. Connect to Mongo using [Mongoose](http://mongoosejs.com/), a node module.
2. Define a Mongoose Schema for our Documents.
3. Create base GET, POST, PUT, and DELETE server-side routes.
4. Implement the Mongoose syntax needed to support the above routes.
5. Use Angular to add, display, update and delete people.
6. Explore a pre-save hook provided by Mongoose.

## New Terms

* Mongoose schema
* Mongoose model
* Mongoose subdocument
* Hook

## New Syntax

Quick rundown of new syntax we will use to query our database using Mongoose.

### Mongoose Model Functions

* `find`
* `findById`
* `findByIdAndUpdate`
* `findByIdAndRemove`

### Mongoose Document Functions

* `save`

### Mongoose Schema Functions

* `pre`


In lecture today we went over how we can talk to our MongoDB database from our Node/Express code. Much like pg with PostGRES, we use mongoose to communicate with MongoDB.

[x] Add the following fields to our Person Schema:

  dateOfBirth : a Date field for their Date of Birth
  internetPts : a Number field to track this person's awesome imaginary (yet powerful) Internet Points!

[x] Update the entry form to accommodate the new Date of Birth information. BUT,
[x] new people cannot dictate how many internetPts they get! Make sure each new Person stored in the database  starts with 1,000 internetPoints. Don't worry about existing documents.

[x] Both pieces of data should also show up on the DOM.

[x]Add a button to each person listing on the DOM that, when clicked, increases their internetPts by 100 and updates their document in the collection.

[]Implement a search feature. This search should be able to search for documents by name and should be implemented on the server using mongoose methods.

You'll need to figure out a place on the DOM to show the results.

NOTE, do not use an Angular filter for this! Use Mongoose!
