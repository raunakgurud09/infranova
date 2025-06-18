import { Router } from "express";
import { pingName } from "./controller";
const router = Router();

router.post("/", pingName);

export default router;
