
export interface ITemplate {
  id: number;
  templateName: string;
  projectId: number;
}

export interface ITask {
  id: number;
  taskName: string;
  templateId: number;
  projectId: number;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface ITaskPostPayload {
  taskName: string;
  templateId: number;
  projectId: number;
}

export interface ITaskPatchPayload {
    id : number;
    taskName : string;
    projectId : number;
}

export interface ITemplatePostPayload {
    templateName: string;
    projectId: number;
  }