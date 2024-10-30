const mysql = require("mysql2");
const config = require("../config");

const connection = mysql.createConnection(config.db);

connection.connect((err) => {
	if (err) {
		console.log("Error connecting to: " + err.message);
	}
	console.log("Connected to MySQL Server.");
});

module.exports = connection.promise();
