import express from "express";

const PORT = 4000;

const app = express();

app.set("view engine", "pug");
app.use(logger);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
