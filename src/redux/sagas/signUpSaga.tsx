import  { AxiosResponse } from "axios";
import { call } from "redux-saga/effects";
import { IUser } from "../../models/models";
import { postUserCall } from "../../services/signUpService";
import { userActionPayload } from "../actions/signUpAction/signUpActionTypes";

export function* postUsersSaga(action: userActionPayload) {
  const response: AxiosResponse = yield call(() => postUserCall(action));
  const users: IUser[] = response.data;
}
