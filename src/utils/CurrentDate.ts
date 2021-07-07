export interface ICurrentDate {
  now(): string;
}

export default class CurrentDate implements ICurrentDate {
  public now(): string {
    const date = new Date();

    const year = date.getFullYear();
    const month = this.addZero(date.getMonth() + 1);
    const day = this.addZero(date.getDate());

    const hour = date.getHours();
    const minute = this.addZero(date.getMinutes());
    const second = date.getSeconds();

    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  }

  private addZero(value: number): string | number {
    if (value <= 9) {
      return '0' + value;
    } else {
      return value;
    }
  }
}
