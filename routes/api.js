const express = require('express');
const router = express.Router();

router.get("/",(req, res) => {
    // res.json = echo json_encode(...) in PHP
    res.json({message: "you hit the api route"});
});


//this is the /api/usrs route handler
router.get("/users", (req, res) => {
    //run a SQL query here
    //res.json(query result here)
    //echo a message  -> just like PHP
    res.json({message: "all users route"})
});

module.exports = router;