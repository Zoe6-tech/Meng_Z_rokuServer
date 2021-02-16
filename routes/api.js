const express = require('express');
//express route handless incoming requests and directs them where they need to go
//like a traffic cop
const router = express.Router();

//import the sql connection
const connect = require("../config/sqlConfig.js");

router.get("/",(req, res) => { //http://localhost:5050/api/
    // res.json = echo json_encode(...) in PHP
    res.json({message: "you hit the api route"});
});


//this is the /api/usrs route handler
router.get("/users", (req, res) => {//http://localhost:5050/api/users
    //run a SQL query here
      //res.json(query result here)
    //echo a message  -> just like PHP
      res.json({message: "all users route"});
});

// movies : http://localhost:5050/api/movies
router.get("/movies", (req, res) => {//http://localhost:5050/api/movies
    //run a SQL query here -> get all movies from my DB
    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM tbl_movies', function (error, results) {
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;

          res.json({results});
        });
      });

});


// movie id -> dynamic route hacdler that can accept a parameter
//this is eqivalent to : $_GET["id"] = (req.params.id)
//you are passing the id via the route: /api/movies/1, /api/movies/20. etc
router.get("/movies/:id", (req, res) => {//http://localhost:5050/api/movies/12
    //run a SQL query here -> get all movies from my DB
    connect.query(`SELECT * FROM tbl_movies WHERE movies_id = ${req.params.id}`, function (error, results) {

        if (error) throw error;

        res.json({results});
      });
});


module.exports = router;