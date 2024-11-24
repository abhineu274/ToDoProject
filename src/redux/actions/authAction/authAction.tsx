import { Action } from "redux";
import { IUser } from "../../../models/models";
import {
  authActionTypes,
  loginInterface,
  logoutInterface,
} from "./authActionTypes";

export const loginAction = (user: IUser): loginInterface => ({
  type: authActionTypes.LOGIN,
  payload: user,
});

export const logoutAction = (): logoutInterface => ({
  type: authActionTypes.LOGOUT,
});
