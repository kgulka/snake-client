
const myClient = require("./client");

console.log("Connecting ...");
const conn = myClient.connect();

const onEventFn = function () {
  console.log('Connected!');
  //send Name: KAG to the server after connection 
  conn.write("Name: KAG");
}
const onEventFnMove = function () {
  console.log('Moving!');
  //send Name: KAG to the server after connection 
  setTimeout(() => {conn.write("Move: up");}, 200);
  setTimeout(() => {conn.write("Move: up");}, 350);
  setTimeout(() => {conn.write("Move: left");}, 550);
  setTimeout(() => {conn.write("Move: left");}, 750);
}
conn.on("connect", onEventFn);

conn.on('data', (messageFromServer) => {
  console.log('Message from server:', messageFromServer);

});

//conn.on("connect", onEventFnMove);

/* Snake moves
"Move: up" - move up one square (unless facing down)
"Move: down" - move down one square (unless facing up)
"Move: left" - move left one square (unless facing right)
"Move: right" - move left one square (unless facing left) 
*/

