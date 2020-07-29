// main file through which we will launch the game client
// 127.0.0.1  is localhost ip

const connect = require('./client.js');


console.log('Connecting ...');

connect.connect();