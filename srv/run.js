import * as net from "net";

function handler(socket) {
  console.log("Kazkas prisijunge");
  socket.end();
}

const srv = net.createServer(handler);
srv.listen(3000);
