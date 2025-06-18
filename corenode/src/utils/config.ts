import dotenv from "dotenv";
dotenv.config();

type Config = {
  PORT: number;
  ENVIRONMENT: string;
};

const config: Config = {
  PORT: Number(process.env.PORT) || 3000,
  ENVIRONMENT: process.env.ENVIRONMENT || "DEVELOPMENT",
};

export default config;
