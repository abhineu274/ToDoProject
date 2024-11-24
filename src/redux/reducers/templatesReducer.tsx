import {
  templatesAction,
  templatesActionPayload,
  templatesActionTypes,
} from "../actions/templateAction";
import { ITemplate } from "../../models/models";

export interface ITemplateState {
  templates: ITemplate[];
}

export const initialState: ITemplateState = {
  templates: [],
};

export const templatesReducer = (
  state = initialState,
  action: templatesAction | templatesActionPayload
) => {
  switch (action.type) {
    case templatesActionTypes.SETTEMPLATES:
      return {
        ...state,
        templates: action.payload,
      };

    default:
      return state;
  }
};
