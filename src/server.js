import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import dataRouter from "./routers/dataRouter";

const PORT = 7000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views"); //pug 설치할 때 같이 있어야 함.현재 작동 디렉토리인 package.json를 기준으로 위치 설정을 해주어야 함.

app.use(logger);
app.use("/", rootRouter);
app.use("/add", dataRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
