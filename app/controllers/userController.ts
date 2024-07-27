import { Request, Response } from "express";
import User from "../models/user";
import { error } from "console";
import { stringify } from "querystring";
interface UserStoreProps {
  firstName: string;
  lastName: string;
  email: string;
  role: "ADMIN" | "USER";
}

class UserController {
  async createUser(req: Request, res: Response) {
    const data: UserStoreProps = req.body;
    const email = data.email;
    try {
      const userExists = await User.findOne({ where: { email } });
      if (!userExists) {
        const result = await User.create(data);
        console.log(result);
      } else {
        throw new Error("Existing user");
      }
    } catch (err) {
      console.warn(err);
      res.status(400).send(err);
      throw Error()
    }
    return res.status(204).send;
  }
  async findUser(req: Request, res: Response) {
    const { email } = req.params;
    const resultUser = User.findOne({ where: { email } });
    res.status(200).send(resultUser);
  }
}
export { UserController };
