export interface IPath {
  name: string;
  id: string;
}

export interface IDir extends IPath {
  files?: { name: string }[];
  directories?: IDir[];
}
