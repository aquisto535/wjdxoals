import express from "express";
import http from "http";
import WebSocket from "ws";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app); // requestListener가 있어야함.

const wss = new WebSocket.Server({ server }); //http와 websocket 서버 모두 동작시킴.필수사항은 아님.

//socket은 서버와 브라우저 사이의 연결을 의미한다.
wss.on("connection", (socket) => {
  console.log("Connected to browser");
  socket.on("close", () => {
    console.log("disconnected to server");
  });
  //브라우저로부터 메세지(요청) 받음
  socket.on("message", (message) => {
    console.log(message.toString());
  });
  //브라우저(프론트엔드)에 메세지(요청) 보냄
  socket.send("hello!!");
});

server.listen(3000, handleListen);
