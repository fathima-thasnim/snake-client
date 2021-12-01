
const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: 50541// PORT number here,
  });
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server" )
  });
  conn.on('connect', () => {
    conn.write('Name: FT')
  })

  return conn;
};
module.exports = {connect}