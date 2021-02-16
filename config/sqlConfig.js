const creds = require("./userConfig");
const sql = require('mysql');


//these are the same connect date that you would use in PHP connect script
//we want to obsure them a bit for security (normally these would be saved in an .env file)
//and then read in at runtime / create time

const connection = sql.createPool({
    connectionLimit : 10,//10 users can connect to app
    host            : creds.host,
    user            : creds.user,
    password        : creds.password,
    port            : creds.post,
    database        : creds.database
  });

module.exports = connection;