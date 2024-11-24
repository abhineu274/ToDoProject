import { IProject, IprojectDelete, IProjectEdit, IProjectPostPayload } from "../../../models/IProject";
import {
  deleteProjectInterface,
  editProjectInterface,
  getprojectInterface,
  postprojectInterface,
  projectActionTypes,
  setprojectInterface,
} from "./projectActionTypes";

export const postProjectAction = (
  projectsList: IProjectPostPayload
): postprojectInterface => ({
  type: projectActionTypes.POSTPROJECT,
  payload: projectsList,
});

export const getProjectAction = (userId: number): getprojectInterface => ({
  type: projectActionTypes.GETPROJECT,
  payload: userId,
});

export const setProjectAction = (
  projectsList: IProject[]
): setprojectInterface => ({
  type: projectActionTypes.SETPROJECT,
  payload: projectsList,
});

export const deleteProjectAction = (
  project: IprojectDelete
): deleteProjectInterface => ({
  type: projectActionTypes.DELETEPROJECT,
  payload: project,
});

export const editProjectAction = (
  project: IProjectEdit
): editProjectInterface => ({
  type: projectActionTypes.EDITPROJECT,
  payload: project,
});
