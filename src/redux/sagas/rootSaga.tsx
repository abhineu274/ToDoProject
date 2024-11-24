import { takeEvery, takeLatest } from "redux-saga/effects";
import { projectActionTypes } from "../actions/projectAction/projectActionTypes";
import { userActionTypes } from "../actions/signUpAction/signUpActionTypes";
import { tasksActionTypes } from "../actions/taskAction";
import { templatesActionTypes } from "../actions/templateAction";
import { deleteProjectSaga, getProjectsSaga, patchProjectSaga, postProjectsSaga } from "./projectSaga";
import { postUsersSaga } from "./signUpSaga";
import {
  deleteTasksSaga,
  fetchTasksSaga,
  patchTaskSaga,
  createTaskSaga,
} from "./tasksSaga";
import {
  deleteTemplatesSaga,
  fetchTemplatesSaga,
  createTemplateSaga,
} from "./templatesSaga";

export function* rootSaga() {
  yield takeLatest(templatesActionTypes.FETCHTEMPLATES, fetchTemplatesSaga);
  yield takeLatest(tasksActionTypes.FETCHTASKS, fetchTasksSaga);
  yield takeLatest(tasksActionTypes.DELETETASK, deleteTasksSaga);
  yield takeLatest(tasksActionTypes.CREATETASK, createTaskSaga);
  yield takeLatest(tasksActionTypes.PATCHTASK, patchTaskSaga);
  yield takeLatest(templatesActionTypes.CREATETEMPLATE, createTemplateSaga);
  yield takeLatest(templatesActionTypes.DELETETEMPLATE, deleteTemplatesSaga);
  yield takeEvery(userActionTypes.POSTUSER, postUsersSaga);
  yield takeLatest(projectActionTypes.POSTPROJECT, postProjectsSaga);
  yield takeLatest(projectActionTypes.GETPROJECT, getProjectsSaga);
  yield takeLatest(projectActionTypes.DELETEPROJECT, deleteProjectSaga);
  yield takeLatest(projectActionTypes.EDITPROJECT, patchProjectSaga);
}
