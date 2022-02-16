const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
 
  conn.setEncoding("utf8");

  return conn;
};
console.log("Connecting ...");
const conn = connect();

const onEventFn = function () {
  console.log('do something');
}
conn.on("connect", onEventFn);

conn.on('data', (messageFromServer) => {
  console.log('Message from server:', messageFromServer);
});