import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// ROUTER
import burgerRoute from "./routes/burger.js";
import accompagnementRoute from "./routes/accompagnement.js";
import boissonRoute from "./routes/boisson.js";
import dessertRoute from "./routes/dessert.js";
// import userApiAsync from "./router-async.js";

dotenv.config();

const app = express();

// Connextion DB
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

// PORT
const PORT = process.env.PORT || 8080;

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// PATH ROUTER
app.use("/api/burger", burgerRoute);
app.use("/api/accompagnement", accompagnementRoute);
app.use("/api/boisson", boissonRoute);
app.use("/api/dessert", dessertRoute);
// app.use("/api/user/async", userApiAsync);

// SERVEUR
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
