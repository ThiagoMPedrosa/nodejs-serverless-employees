'use strict';
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: "xxxxxxxxxxxxxxxxxxx",
  user: "admin",
  password: "xxxxxxxx",
  database: "xxxxxxxx"
});

module.exports.getEmployees = async (event) => {
  const p = new Promise((resolve) => {
    connection.query("SELECT * FROM employee", function(err,results){
      resolve(results)
    })
  })

  const result = await p;

  return {
    statusCode: 200,
    body: JSON.stringify({results: result}, null, 4)
  };
};


module.exports.insertEmployee = async (event) => {
  const p = new Promise((resolve) => {
    connection.query("INSERT INTO app.employee (age, name, position) VALUES ( '" + event.pathParameters.age + "', '" + event.pathParameters.name + "', '" + event.pathParameters.position + "' )",function(err,results){
      err == null ? resolve("Employee successfully Inserted!: " + JSON.stringify(results)) : resolve(err);
    })
  })

  const result = await p;

  return {
    statusCode: 200,
    body: JSON.stringify({results: result})
  };
};

module.exports.editEmployee = async (event) => {
  const p = new Promise((resolve) => {
    connection.query("UPDATE app.employee set " + event.pathParameters.column + "= '" + event.pathParameters.value + "' where idEmployee = " + event.pathParameters.empId,function(err,results){
      err == null ? resolve("Employee successfully Updated!: " + JSON.stringify(results)) : resolve(err);
    })
  })

  const result = await p;

  return {
    statusCode: 200,
    body: JSON.stringify({results: result})
  };
};

module.exports.deleteEmployee = async (event) => {
  const p = new Promise((resolve) => {
      connection.query("DELETE from app.employee where idEmployee = '" +  event.pathParameters.empId + "'",function(err,results){
        err == null ? resolve("Employee successfully Deleted!: " + JSON.stringify(results)) : resolve(err);
      })
  })

  const result = await p;

  return {
    statusCode: 200,
    body: JSON.stringify({results: result})
  };
};