const { connect } = require('./client');
let connection
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //Handling CTRL + C User Input
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (data) {
  if (data === `\u0003`) {
    console.log('Leaving...')
    process.exit();
  }
  if (data === 'w') connection.write('Move: up ');
  if (data === 'a') connection.write('Move: left ');
  if (data === 'd') connection.write('Move: right ');
  if (data === 's') connection.write('Move: down ');
}


console.log("Connecting ...");
 connect();