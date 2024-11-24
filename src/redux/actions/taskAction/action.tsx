import {
  ITask,
  ITaskPatchPayload,
  ITaskPostPayload,
} from "../../../models/models";
import {
  deleteTasksInterface,
  fetchTasksInterface,
  patchTasksInterface,
  createTasksInterface,
  setTasksInterface,
  tasksActionTypes,
} from "./types";

export const fetchTasksAction = (projectId: number): fetchTasksInterface => ({
  type: tasksActionTypes.FETCHTASKS,
  payload: projectId,
});

export const setTasksAction = (tasks: ITask[]): setTasksInterface => ({
  type: tasksActionTypes.SETTASKS,
  payload: tasks,
});

export const deleteTasksAction = (taskId: number): deleteTasksInterface => ({
  type: tasksActionTypes.DELETETASK,
  payload: taskId,
});
export const createTaskAction = (
  task: ITaskPostPayload
): createTasksInterface => ({
  type: tasksActionTypes.CREATETASK,
  payload: task,
});

export const patchTaskAction = (
  task: ITaskPatchPayload
): patchTasksInterface => ({
  type: tasksActionTypes.PATCHTASK,
  payload: task,
});
