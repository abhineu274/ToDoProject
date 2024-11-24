import axios, { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import { IProject } from "../../models/IProject";
import {
  deleteproject,
  getProjectCall,
  patchTasks,
  postProjectCall,
} from "../../services/projectService";
import {
  deleteProjectAction,
  editProjectAction,
  getProjectAction,
  projectActionPayload,
  projectActionTypes,
} from "../actions/projectAction/projectActionTypes";

export function* postProjectsSaga(action: projectActionPayload) {
  const response: AxiosResponse = yield call(() => postProjectCall(action));
  const projectsList: IProject[] = response.data;
  yield put({
    type: projectActionTypes.GETPROJECT,
    payload: action.payload.userId[0],
  });
}
export function* getProjectsSaga(action: getProjectAction) {
  const response: AxiosResponse = yield call(() => getProjectCall(action));

  const projectsLists: IProject[] = response.data;
  const filteredProjectList:IProject[] = projectsLists.filter((p)=>p.userId.includes(action.payload)) 
  yield put({ type: projectActionTypes.SETPROJECT, payload: filteredProjectList });
}
export function* deleteProjectSaga(action: deleteProjectAction) {
  const response: AxiosResponse = yield call(() => deleteproject(action));
  yield put({
    type: projectActionTypes.GETPROJECT,
    payload: action.payload.userId[0],
  });
}

export function* patchProjectSaga(action: editProjectAction) {
  const response: AxiosResponse = yield call(() => patchTasks(action));
  yield put({
    type: projectActionTypes.GETPROJECT,
    payload: action.payload.userId[0],
  });
}
