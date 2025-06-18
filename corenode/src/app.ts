import express from "express";
import router from "./router";

const app = express();
app.use(express.json());

// Routes
app.use("/api", router);

// Error handling

export default app;
