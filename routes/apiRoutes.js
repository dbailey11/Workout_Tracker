const db = require("../models");

module.exports = function (app) {
  //finds last workout
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .sort({ date: -1 })
      .then((dbWorkout) => {
        console.log("hi");
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //post new workout
  app.post("/api/workouts/", async (req, res) => {
    
    db.Workout.create(req.body).then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
      
  });

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
