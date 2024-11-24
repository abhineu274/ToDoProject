import { IUser } from "../../models/IUser";
import {
  userAction,
  userActionPayload,
  userActionTypes,
} from "../actions/signUpAction/signUpActionTypes";
export interface IUserState {
  users: IUser[];
}

export const initialState: IUserState = {
  users: [],
};

export const SignUpReducer = (
  state = initialState,
  action: userAction | userActionPayload
) => {
  switch (action.type) {
    case userActionTypes.POSTUSER:
      return { ...state, users: [...state.users, action.payload] };

    default:
      return state;
  }
};

export {};
