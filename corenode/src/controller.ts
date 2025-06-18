import { NextFunction, Request, Response } from "express";

export const pingName = (req: Request, res: Response) => {
  try {
    const body = req.body?.name;
    res.json({ name: body?.name ?? "" });
  } catch (error) {
    console.error(error);
  }
};
