const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  };
}; 
let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //Handling CTRL + C User Input
  stdin.on('data',handleUserInput );
  stdin.on('data',(key) => {
    switch(key) {
      case 'w':
        connection.write("Move: up");
        break;
      case 'a':
        connection.write("Move: left");
        break;
      case 's':
        connection.write("Move: down");
        break;
      case 'd':
        connection.write("Move: right");
        break;  
    }
  });
  return stdin;
};
module.exports = {setupInput}