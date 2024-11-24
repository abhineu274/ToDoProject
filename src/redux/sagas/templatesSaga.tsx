import axios, { AxiosResponse } from "axios";
import { actionChannel, call, put } from "redux-saga/effects";
import {
  templatesAction,
  templatesActionPostPayload,
  templatesActionTypes,
} from "../actions/templateAction";
import { ITemplate } from "../../models/models";
import {
  deleteTasks,
  fetchTemplates,
  postTemplates,
} from "../../services/templatesService";

export function* fetchTemplatesSaga(action: templatesAction) {
  const response: AxiosResponse = yield call(() => fetchTemplates(action));

  const templatesData: ITemplate[] = response.data;

  yield put({
    type: templatesActionTypes.SETTEMPLATES,
    payload: templatesData,
  });
}

export function* createTemplateSaga(action: templatesActionPostPayload) {
  const response: AxiosResponse = yield call(() => postTemplates(action));

  yield put({
    type: templatesActionTypes.FETCHTEMPLATES,
    payload: action.payload.projectId,
  });
}

export function* deleteTemplatesSaga(action: templatesAction) {
  const response: AxiosResponse = yield call(() => deleteTasks(action));
}

export {};
