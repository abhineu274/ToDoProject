import { Action } from "redux";
import { IProject, IprojectDelete, IProjectEdit, IProjectPostPayload } from "../../../models/IProject";

export enum projectActionTypes {
  POSTPROJECT = "POSTPROJECT",
  GETPROJECT = "GETPROJECT",
  SETPROJECT = "SETPROJECT",
  DELETEPROJECT = "DELETEPROJECT",
  EDITPROJECT = "EDITPROJECT",
}

export interface postprojectInterface extends Action {
  type: projectActionTypes.POSTPROJECT;
  payload: IProjectPostPayload;
}
export interface getprojectInterface extends Action {
  type: projectActionTypes.GETPROJECT;
  payload: number;
}

export interface setprojectInterface extends Action {
  type: projectActionTypes.SETPROJECT;
  payload: IProject[];
}
export interface deleteProjectInterface extends Action {
  type: projectActionTypes.DELETEPROJECT;
  payload: IprojectDelete;
}
export interface editProjectInterface extends Action {
  type: projectActionTypes.EDITPROJECT;
  payload: IProjectEdit;
}

export type projectActionPayload = postprojectInterface;

export type getProjectAction = getprojectInterface;

export type setProjectAction = setprojectInterface;

export type deleteProjectAction = deleteProjectInterface;

export type editProjectAction = editProjectInterface;
