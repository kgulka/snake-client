const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
 
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };