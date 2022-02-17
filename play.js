
const myClient = require("./client");

console.log("Connecting ...");
const conn = myClient.connect();

const onEventFn = function () {
  console.log('Connected!');
}
conn.on("connect", onEventFn);

conn.on('data', (messageFromServer) => {
  console.log('Message from server:', messageFromServer);
  //send Name: KAG to the server after connection 
  conn.write("Name: KAG");
});


