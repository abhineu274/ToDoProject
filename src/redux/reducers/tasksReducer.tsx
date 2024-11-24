import {
  tasksAction,
  tasksActionPayload,
  tasksActionTypes,
} from "../actions/taskAction";
import { ITask } from "../../models/models";

export interface ITaskState {
  tasks: ITask[];
}

export const initialState: ITaskState = {
  tasks: [],
};

export const tasksReducer = (
  state = initialState,
  action: tasksAction | tasksActionPayload
) => {
  switch (action.type) {
    case tasksActionTypes.SETTASKS:
      return {
        ...state,
        tasks: action.payload,
      };

    default:
      return state;
  }
};
