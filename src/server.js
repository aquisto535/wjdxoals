import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";

const PORT = 7000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views"); //pug 설치할 때 같이 있어야 함.
app.use(logger);

app.use("/", rootRouter);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
