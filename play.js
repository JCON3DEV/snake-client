// main file through which we will launch the game client
// 127.0.0.1  is localhost ip

const { connect } = require('./client.js');
const { setupInput } = require('./input.js');


console.log('Connecting ...');

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */


let conn = connect();// const conn = connect
setupInput(conn);
