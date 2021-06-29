import { v4 } from 'uuid';

export default class IdService {
  public idGenerate(): string {
    return v4();
  }
}
