const db = require("../models");

module.exports = function (app) {
  //finds last workout for main page
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .sort({ date: -1 })
      .then((dbWorkout) => {
        // console.log("hi");
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //get route for stats page
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .limit(7)  
    .then((dbWorkout) => {
        console.log("hi");
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //post new workout
  app.post("/api/workouts/", (req, res) => {
    
    db.Workout.create(req.body).then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
      
  });

  //adds exercise to current workout
  app.put("/api/workouts/:id", (req, res) => {
      db.Workout.findByIdAndUpdate(
          {_id: req.params.id}, {exercises: req.body}
      )
      .then((dbWorkout) => {
          res.json(dbWorkout);
      })
      .catch(err => {
          res.status(400).json(err);
      });
  });


  

};
