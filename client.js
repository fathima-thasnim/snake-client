
const net = require('net');
const { IP, PORT, NAME } = require('./constants');

//connection with game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incomming data as text
  conn.setEncoding("utf8");

  //receive data from server
  conn.on("connect", () => {
    console.log("Successfully connected to game server" )
  });


  // sending name to the server
  /*conn.on('connect', () => {
    conn.write('Name: FT');
  });*/
  conn.write(`Name: ${NAME}`)

  
  // move up snake with setIntervals
  /*const move = setInterval(() => {
    conn.write("Move: up");
  },50);*/

  // move up snake 5 times right after connection establishes each have 50msdelay
  /*let timeDelay = 50;
  for (let i = 0; i < 5; i++) {
    setTimeout(() => conn.write("Move: up"), timeDelay);
    timeDelay += 50
  };*/


  return conn;
};
module.exports = {connect};