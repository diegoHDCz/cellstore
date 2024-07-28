import { User } from "./../models/user";
import { Request, Response } from "express";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../services/firebaseconfig";

class AuthController {
  async createUser(req: Request, res: Response) {
    const { email, password, firstName, lastName, role } = req.body;
    auth;

    try {
      const userExists = await User.findOne({ where: { email } });
      if (!userExists) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return res.send(errorCode).json({ message: errorMessage });
          });
        const result = await User.create({ email, firstName, lastName, role });
        return res.status(200).json({ userId: result.id });
      } else {
        throw new Error("Existing user");
      }
    } catch (err) {
      console.warn(err);
      return res.send(400).json({ message: err });
    }
  }

  async signIn(req: Request, res: Response) {
    const { email, password } = req.body;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}

export { AuthController };
