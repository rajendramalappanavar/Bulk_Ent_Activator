var mysql = require('sync-mysql');

var connection = new mysql({
  host: "localhost",
  user: "root",
  password: "mysql",
  database : "iadc"
});



module.exports = {
    connection
};