import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/user.controller";

const userRoutes = express.Router();

userRoutes.route("/").get(getUsers).post(createUser);

userRoutes.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default userRoutes;