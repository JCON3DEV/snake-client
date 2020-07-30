const net = require('net');
const connect = require('./client.js');


let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;
  return stdin;
}

const handleUserInput = function (data) {
  if (data === "\x03") {
    process.exit();
  }
  if (data === "w"){
    connection.write("Move: up");  
  }
  if (data === "a") {
    connection.write("Move: left");
  }
  if (data === "s") {
    connection.write("Move: down");
  }
  if (data === "d") {
    connection.write("Move: right");
  }
  // if (data === "p") {// does not work
  //   connection.write("I'm the Greatessssst");
  // }

};

module.exports = {
  setupInput,
  handleUserInput
}
