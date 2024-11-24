import axios from "axios";
import {
  templatesAction,
  templatesActionPostPayload,
} from "../redux/actions/templateAction";

export function fetchTemplates(action: templatesAction) {
  return axios.get(
    `http://localhost:8000/templates?projectId=${action.payload}`
  );
}

export function postTemplates(action: templatesActionPostPayload) {
  return axios.post(`http://localhost:8000/templates`, action.payload);
}

export function deleteTasks(action: templatesAction) {
  return axios.delete(`http://localhost:8000/templates/${action.payload}`);
}
