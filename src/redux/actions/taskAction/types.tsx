import { Action } from "redux";
import {
  ITask,
  ITaskPatchPayload,
  ITaskPostPayload,
} from "../../../models/models";

export enum tasksActionTypes {
  FETCHTASKS = "FETCHTASKS",
  SETTASKS = "SETTASKS",
  DELETETASK = "DELETETASK",
  CREATETASK = "CREATETASK",
  PATCHTASK = "PATCHTASK",
}

export interface fetchTasksInterface extends Action {
  type: tasksActionTypes.FETCHTASKS;
  payload: number;
}

export interface setTasksInterface extends Action {
  type: tasksActionTypes.SETTASKS;
  payload: ITask[];
}

export interface deleteTasksInterface extends Action {
  type: tasksActionTypes.DELETETASK;
  payload: number;
}

export interface createTasksInterface extends Action {
  type: tasksActionTypes.CREATETASK;
  payload: ITaskPostPayload;
}

export interface patchTasksInterface extends Action {
  type: tasksActionTypes.PATCHTASK;
  payload: ITaskPatchPayload;
}

export type tasksAction = fetchTasksInterface | deleteTasksInterface;
export type tasksActionPayload = setTasksInterface;
export type taskActionPostPayload = createTasksInterface;
export type taskActionPatchPayload = patchTasksInterface;
