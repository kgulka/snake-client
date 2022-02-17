let connection;
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
    if (key === 'd') {
      connection.write("Move: right");
      //console.log("Move: right");
    }
    if (key === 'a') {
      connection.write("Move: left");
    }
    if (key === 'w') {
      connection.write("Move: up");
      //console.log("Move: up");
    }
    if (key === 's') {
      connection.write("Move: down");
    }
    if (key === 'l') {
      connection.write("Say: runrunrun");
    }
    if (key === 'y') {
      connection.write("Say: yeeehaaa!");
    }
};

//interface to handle user input from stdin
const setupInput = function (connIn) {
  connection = connIn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};



module.exports = { setupInput };