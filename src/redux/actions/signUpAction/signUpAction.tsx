import { IUser } from "../../../models/IUser";
import { addUserInterface, postUserInterface, userActionTypes } from "./signUpActionTypes";

  export const postUserAction = (user: IUser): postUserInterface => ({
    type: userActionTypes.POSTUSER,
    payload: user,
  });
  