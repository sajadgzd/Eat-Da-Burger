// Set up MySQL connection.
var mysql = require("mysql");

// to protect the key from github
require("dotenv").config();
if (process.env.CLEARDB_DATABASE_URL) {
    var connection = mysql.createConnection('mysql://b7ea03db4c31c9:44a7ecde@us-cdbr-iron-east-02.cleardb.net/heroku_d7538f3a08fe51e?reconnect=true');
} else {
    // var connection = mysql.createConnection({
    //     host: "localhost",
    //     port: 3306,
    //     user: "root",
    //     password: process.env.KEY,
    //     database: "burgers_db"
    // });
    var connection = mysql.createConnection('mysql://root:' + process.env.KEY + '@localhost:3306/burgers_db');
}
// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;