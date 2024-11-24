import { IProject } from "../../models/IProject";
import {
  getProjectAction,
  projectActionPayload,
  projectActionTypes,
  setProjectAction,
} from "../actions/projectAction/projectActionTypes";
export interface IProjectState {
  projectsList: IProject[];
}
export const initialState: IProjectState = {
  projectsList: [],
};

export const ProjectReducer = (
  state = initialState,
  action: projectActionPayload | setProjectAction | getProjectAction
) => {
  switch (action.type) {
    // case projectActionTypes.POSTPROJECT:
    //   return {
    //     ...state,
    //     projectsList: [...state.projectsList, action.payload],
    //   };
    case projectActionTypes.SETPROJECT:
      return {
        ...state,
        projectsList: [...action.payload],
      };
    default:
      return state;
  }
};
