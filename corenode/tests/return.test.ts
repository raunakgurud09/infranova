import { Request, Response } from "express";
import { pingName } from "../src/controller";

describe("pingName", () => {
  it("should return the name from request body", () => {
    const req = {
      body: {
        name: "Raunak",
      },
    } as Request;

    const res = {
      json: jest.fn(),
    } as unknown as Response;

    pingName(req, res);

    expect(res.json).toHaveBeenCalledWith({ name: "Raunak" });
  });

  it("should return empty name if none provided", () => {
    const req = {
      body: {},
    } as Request;

    const res = {
      json: jest.fn(),
    } as unknown as Response;

    pingName(req, res);

    expect(res.json).toHaveBeenCalledWith({ name: "" });
  });
});
