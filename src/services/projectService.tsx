import axios from "axios";
import {
  deleteProjectAction,
  editProjectAction,
  getProjectAction,
  projectActionPayload,
} from "../redux/actions/projectAction/projectActionTypes";

export function postProjectCall(action: projectActionPayload) {
  return axios.post("http://localhost:8000/projects", action.payload);
}
export function getProjectCall(action: getProjectAction) {
  return axios.get(`http://localhost:8000/projects`);
}
export function deleteproject(action: deleteProjectAction) {
  return axios.delete(
    `http://localhost:8000/projects/${action.payload.projectId}`
  );
}
export function patchTasks(action: editProjectAction) {
  const patchPayload = {
    pname : action.payload.pname,
  };
  return axios.patch(
    `http://localhost:8000/projects/${action.payload.projectId}`,
    patchPayload
  );
}
