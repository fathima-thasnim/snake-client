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
  
};
module.exports = {setupInput}