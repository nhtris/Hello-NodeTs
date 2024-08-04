import "module-alias/register";
import express, { Request, Response } from "express";
import { hello } from "./routes";

const app = express();
const port = 3002;

app.get("/", (req: Request, res: Response) => {
  res.send(hello);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
