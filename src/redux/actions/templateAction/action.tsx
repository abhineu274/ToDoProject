import { ITemplate, ITemplatePostPayload } from "../../../models/models";
import {
  deleteTemplatesInterface,
  fetchTemplatesInterface,
  createTemplatesInterface,
  setTemplatesInterface,
  templatesActionTypes,
} from "./types";

export const fetchTemplatesAction = (
  projectId: number
): fetchTemplatesInterface => ({
  type: templatesActionTypes.FETCHTEMPLATES,
  payload: projectId,
});

export const setTemplatesAction = (
  templates: ITemplate[]
): setTemplatesInterface => ({
  type: templatesActionTypes.SETTEMPLATES,
  payload: templates,
});

export const createTemplatesAction = (
  template: ITemplatePostPayload
): createTemplatesInterface => ({
  type: templatesActionTypes.CREATETEMPLATE,
  payload: template,
});

export const deleteTemplateAction = (
  templateId: number
): deleteTemplatesInterface => ({
  type: templatesActionTypes.DELETETEMPLATE,
  payload: templateId,
});

export {};
