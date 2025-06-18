import { Request, Response } from "express";

export const pingName = (req: Request, res: Response) => {
  try {
    const name = req.body?.name;
    res.json({ name: name ?? "" });
  } catch (error) {
    console.error(error);
  }
};
