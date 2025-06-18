import { Router } from "express";
import { pingName } from "./controller";
const router = Router();

router.get("/", pingName);

export default router;
