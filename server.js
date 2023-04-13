import express from "express";
import cors from "cors";

// ROUTER
import userApi from "./router.js";
// import userApiAsync from "./router-async.js";

const app = express();

// PORT
const PORT = process.env.PORT || 8080;

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// PATH ROUTER
app.use("/api/user", userApi);
// app.use("/api/user/async", userApiAsync);

// SERVEUR
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
