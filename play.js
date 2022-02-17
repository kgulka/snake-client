
const myClient = require("./client");

console.log("Connecting ...");
const conn = myClient.connect();

const onEventFn = function () {
  console.log('do something');
}
conn.on("connect", onEventFn);

conn.on('data', (messageFromServer) => {
  console.log('Message from server:', messageFromServer);
});