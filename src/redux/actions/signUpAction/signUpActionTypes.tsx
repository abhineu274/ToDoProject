import { IUser } from "../../../models/IUser";

export enum userActionTypes {
  ADDUSER = "ADDUSER",
  POSTUSER = "POSTUSER",
}
export interface addUserInterface {
  type: userActionTypes.ADDUSER;
  payload: number;
}
export interface postUserInterface {
  type: userActionTypes.POSTUSER;
  payload: IUser;
}
export type userAction = addUserInterface;

export type userActionPayload = postUserInterface;
