/**
 * Establishes connection with the game server
 */
const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // on(data) event handler 
  // below prints when the game kicks you for idling
  conn.on("data", (data) => {//incomming
    console.log(`Server says ${data}`)
  });
  // on(connect) event handler
  //below prints to terminal when user connecxts to server
  conn.on("connect", () => {
    console.log("Welcome to snek");
    conn.write("Name: JCH");
  });
  // conn.write("Move: up");
  // conn.write("Move: down");
  // conn.write("Move: left");
  // conn.write("Move: right");
  setInterval(() => { conn.write("Move: up") }, 1000)
  

  return conn;
}


module.exports = {
  connect
}

/*
mapping the escape command

mapping keys wasd
extended from the escpe mapping. adding extra if statements
using conn.on 

third file. created probs input.js
where you need to pass info
this iw where play.js is important. 
play.js will need to take the call and hef o the conn object
*/