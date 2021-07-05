import { v4 } from 'uuid';

export interface IIdService {
  idGenerate(): string;
}

export default class IdService implements IIdService {
  public idGenerate(): string {
    return v4();
  }
}
