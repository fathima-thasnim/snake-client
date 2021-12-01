
const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incomming data as text
  conn.setEncoding("utf8");

  //receive data from server
  conn.on("connect", () => {
    console.log("Successfully connected to game server" )
  });


  // sending name to the server
  conn.on('connect', () => {
    conn.write('Name: FT');
  });

  
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
module.exports = {connect}