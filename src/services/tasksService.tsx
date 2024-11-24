import axios from "axios";
import {
  taskActionPatchPayload,
  taskActionPostPayload,
  tasksAction,
} from "../redux/actions/taskAction";

export function fetchTasks(action: tasksAction) {
  return axios.get(`http://localhost:8000/tasks?projectId=${action.payload}`);
}

export function deleteTasks(action: tasksAction) {
  return axios.delete(`http://localhost:8000/tasks/${action.payload}`);
}

export function postTasks(action: taskActionPostPayload) {
  return axios.post(`http://localhost:8000/tasks`, action.payload);
}

export function patchTasks(action: taskActionPatchPayload) {
  const patchPayload = {
    taskName: action.payload.taskName,
  };

  return axios.patch(
    `http://localhost:8000/tasks/${action.payload.id}`,
    patchPayload
  );
}
