/* Snake moves
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left) 
*/
//stdin data callback
const handleUserInput = function (key) {
  
    if (key === '\u0003') {
      process.exit();
    }
    /*
    if (key === '\u001b[C') {
      conn.write("Move: right");
    }
    if (key === '\u001b[D') {
      conn.write("Move: left");
    }
    if (key === '\u001b[A') {
      conn.write("Move: up");
    }
    if (key === '\u001b[B') {
      conn.write("Move: down");
    }
  */
};

//interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};



module.exports = { setupInput };