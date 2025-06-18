import express from "express";
import router from "./router";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", router);

// Error handling

export default app;
