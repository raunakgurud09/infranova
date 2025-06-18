import app from "./app";
import config from "./utils/config";

app.listen(config.PORT, () => {
  console.log(
    `server is running on PORT:${config.PORT}::${config.ENVIRONMENT}`
  );
});
