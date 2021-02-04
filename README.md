# Workout_Tracker

For this assignment, you'll create a workout tracker. You have already been provided with the front end code in the Develop folder. This assignment will require you to create Mongo database with a Mongoose schema and handle routes with Express.

## User Story

As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

## Acceptance Criteria
When the user loads the page, they should be given the option to create a new workout or continue with their last workout.
The user should be able to:
- Add exercises to the most recent workout plan.
- Add new exercises to a new workout plan.
- View the combined weight of multiple exercises from the past seven workouts on the stats page.
- View the total duration of each workout from the past seven workouts on the stats page.

* Important: Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the MongoDB documentation on the $addFields, the MongoDB documentation on the $sum operator, and the Mongoose documentation on aggregate functions to learn how it can be accomplished.

To deploy an application with a MongoDB database to Heroku, you'll need to set up a MongoDB Atlas account and connect a database from there to your application. 
Be sure to use the following guides for support:
- Set Up MongoDB Atlas
- Deploy with Heroku and MongoDB Atlas


=======NOTES===============
- ran "npm i"
- ???*** was not able to run "npm run seeds" ***???
- linked the exercise.html page to index.html - should I be changing the html a tags?

not really sure where to begin....
- I understand I need to build the mongodb.... do I start with that?
- set up a routes directory
