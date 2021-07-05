import { v4 } from 'uuid';

export interface IIdService {
  idGenerate(): string;
}

export default class IdService {
  public idGenerate(): string {
    return v4();
  }
}
