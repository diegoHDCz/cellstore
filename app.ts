import { VercelRequest, VercelResponse } from "@vercel/node";
import app from "./app/server";

export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
