//여기서의 소켓은 서버로의 연결을 의미한다.
const socket = new WebSocket(`ws://${window.location.host}`);

//서버에서 메세지 받음(서버의 요청 수용)
socket.addEventListener("open", () => {
  console.log("connected to server");
});

socket.addEventListener("message", (message) => {
  console.log("just got this: ", message, "from the server");
});

socket.addEventListener("close", () => {
  console.log("disconnected to server");
});

//프론트엔드에서 서버로 메세지 보내기(서버로 요청 보냄)
setTimeout(() => {
  socket.send("hello from the browser!");
}, 10000);
