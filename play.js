
const myClient = require("./client");

//interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const onEventFn = function () {
  console.log('Connected!');
  //send Name: KAG to the server after connection 
  conn.write("Name: KAG");
};

const onEventFnMove = function () {
  console.log('Moving!');
  //send Name: KAG to the server after connection 
  setTimeout(() => {conn.write("Move: up");}, 200);
  setTimeout(() => {conn.write("Move: up");}, 350);
  setTimeout(() => {conn.write("Move: left");}, 550);
  setTimeout(() => {conn.write("Move: left");}, 750);
};

const handleUserInput = function (key) {
  stdInput.on("data", (key) => {

    if (key === '\u0003') {
      process.exit();
    }
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
  });
};
const conn = myClient.connect();
console.log("Connecting ...");
conn.on("connect", onEventFn);

conn.on('data', (messageFromServer) => {
  console.log('Message from server:', messageFromServer);
});
stdInput= setupInput();

stdInput.on("data", handleUserInput);


//conn.on("connect", onEventFnMove);

/* Snake moves
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left) 
*/

