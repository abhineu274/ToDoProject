import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { ProjectReducer } from "./projectReducer";
import { SignUpReducer } from "./signUpReducer";
import { tasksReducer } from "./tasksReducer";
import { templatesReducer } from "./templatesReducer";

export const reducer = combineReducers({
  templatesReducer: templatesReducer,
  taskReducer: tasksReducer,
  ProjectReducer:ProjectReducer,
  SignUpReducer:SignUpReducer,
  authReducer : authReducer
});

export type State = ReturnType<typeof reducer>;
