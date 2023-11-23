import * as http from 'http';
import { WebSocketServer } from 'ws';


class ServerWrapper {

  constructor(localhost = "localhost", port = 8080) {
    this.host = localhost;
    this.port = port;
    this.server = null;
    this.socket = null;
  }

  announcements = {
    greet: "",
    success: "Succeded",
    failure: "",
  }

  runServer() {
    this.server = 
    http.createServer((req, res) => {
      res.writeHead(200, 
          {'Content-Type': 'text/plain'}
      ).end("You are connected to server, and will be redirected in a while.");
    });
    this.server.listen(this.port);
    console.log(this.announcements.success)
  }
  
  connectSocket() {
    this.socket = new WebSocketServer({ server: this.server });
    }
}

const Server = new ServerWrapper;
Server.runServer();
Server.connectSocket();