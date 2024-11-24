import axios, { AxiosResponse } from "axios";
import { actionChannel, call, put } from "redux-saga/effects";
import {
  taskActionPatchPayload,
  taskActionPostPayload,
  tasksAction,
  tasksActionTypes,
} from "../actions/taskAction";
import { ITask } from "../../models/models";
import {
  deleteTasks,
  fetchTasks,
  patchTasks,
  postTasks,
} from "../../services/tasksService";

export function* fetchTasksSaga(action: tasksAction) {
  const response: AxiosResponse = yield call(() => fetchTasks(action));

  const tasksData: ITask[] = response.data;

  yield put({ type: tasksActionTypes.SETTASKS, payload: tasksData });
}

export function* deleteTasksSaga(action: tasksAction) {
  const response: AxiosResponse = yield call(() => deleteTasks(action));
}

export function* createTaskSaga(action: taskActionPostPayload) {
  const response: AxiosResponse = yield call(() => postTasks(action));

  yield put({
    type: tasksActionTypes.FETCHTASKS,
    payload: action.payload.projectId,
  });
}

export function* patchTaskSaga(action: taskActionPatchPayload) {
  const response: AxiosResponse = yield call(() => patchTasks(action));

  yield put({
    type: tasksActionTypes.FETCHTASKS,
    payload: action.payload.projectId,
  });
}

