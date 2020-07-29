// main file through which we will launch the game client
// 127.0.0.1  is localhost ip

const net = require('net');
const stdin = process.stdin;

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: '127.0.0.1',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // on(data) event handler 
  // below prints when the game kicks you for idling
  conn.on("data", (data) =>{
    console.log(`Server says ${data}`)
  }); 
  // on(connect) event handler
  //below prints to terminal when user connecxts to server
  conn.on("connect", () => {
    console.log("Welcome to snek");
  })

  return conn;
}

connect();
console.log('Connecting ...');
