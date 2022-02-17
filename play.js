const myClient = require("./client");
const { setupInput } = require("./input");


const onEventFn = function () {
  console.log('Connected!');
  //send Name: KAG to the server after connection 
  conn.write("Name: KAG");
};

const conn = myClient.connect();
console.log("Connecting ...");
conn.on("connect", onEventFn);

const stdin = setupInput();

conn.on('data', (messageFromServer) => {
  console.log('Message from server:', messageFromServer);
});

