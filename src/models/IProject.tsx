export interface IProject {
  id: number;
  pname: string;
  userId: number[];
}

export interface IprojectDelete{
  projectId:number ;
  userId: number[];
}

export interface IProjectPostPayload {
  pname: string;
  userId: number[];
}
export interface IProjectEdit {
  pname: string;
  projectId:number ;
  userId: number[];
}