let connection;
const {KEYS} = require('./constants');

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  };
}; 

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //Handling CTRL + C User Input
  stdin.on('data',handleUserInput );
  stdin.on('data',(key) => {
    connection.write(KEYS[key]);
  });
  return stdin;
};
module.exports = {setupInput}