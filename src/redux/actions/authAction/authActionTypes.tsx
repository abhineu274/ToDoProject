import { Action } from "redux";
import { IUser } from "../../../models/models";

export enum authActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export interface loginInterface extends Action {
  type: authActionTypes.LOGIN;
  payload: IUser;
}

export interface logoutInterface extends Action {
  type: authActionTypes.LOGOUT;
}

export type authAction = logoutInterface;
export type authActionPayload = loginInterface;
