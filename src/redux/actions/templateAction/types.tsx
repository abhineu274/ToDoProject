import { Action } from "redux";
import { ITemplate, ITemplatePostPayload } from "../../../models/models";

export enum templatesActionTypes {
  FETCHTEMPLATES = "FETCHTEMPLATES",
  SETTEMPLATES = "SETTEMPLATES",
  CREATETEMPLATE = "CREATETEMPLATE",
  DELETETEMPLATE = "DELETETEMPLATE",
}

export interface fetchTemplatesInterface extends Action {
  type: templatesActionTypes.FETCHTEMPLATES;
  payload: number;
}

export interface setTemplatesInterface extends Action {
  type: templatesActionTypes.SETTEMPLATES;
  payload: ITemplate[];
}

export interface createTemplatesInterface extends Action {
  type: templatesActionTypes.CREATETEMPLATE;
  payload: ITemplatePostPayload;
}

export interface deleteTemplatesInterface extends Action {
  type: templatesActionTypes.DELETETEMPLATE;
  payload: number;
}

export type templatesAction =
  | fetchTemplatesInterface
  | deleteTemplatesInterface;
export type templatesActionPayload = setTemplatesInterface;
export type templatesActionPostPayload = createTemplatesInterface;
