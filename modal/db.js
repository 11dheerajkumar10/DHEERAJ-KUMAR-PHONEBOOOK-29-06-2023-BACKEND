const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "contactbook",
});

connection.connect((error) => {
  if (error) {
    console.log({
      Error: error.sqlMessage,
    });
  } else {
    console.log("DATABASE CONNECTED");
  }
});

module.exports = { connection };
