import axios from "axios";
import { IUser } from "../models/models";

export async function fetchUser(username: string) {
  const response = await axios.get(
    `http://localhost:8000/users?username=${username}`
  );
  const userdata: IUser = await response.data[0];
  return userdata;
}

export async function fetchUserByEmail(email: string) {
  const response = await axios.get(
    `http://localhost:8000/users?email=${email}`
  );
  const userdata: IUser = await response.data[0];
  return userdata;
}