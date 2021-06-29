export class User {
  constructor(
    private name: string,
    private email: string,
    private nickname: string,
    private password: string,
    private id: string
  ) {}

  public get getName(): string {
    return this.name;
  }

  public set setName(value: string) {
    this.name = value;
  }

  public get getEmail(): string {
    return this.email;
  }
  public set setEmail(value: string) {
    this.email = value;
  }

  public get getNickname(): string {
    return this.nickname;
  }
  public set setNickname(value: string) {
    this.nickname = value;
  }

  public get getPassword(): string {
    return this.password;
  }
  public set setPassword(value: string) {
    this.password = value;
  }

  public get getId(): string {
    return this.id;
  }
  public set setId(value: string) {
    this.id = value;
  }

  public userToDb(): UserToDB {
    return {
      email: this.getEmail,
      id: this.getId,
      name: this.getName,
      nickname: this.getNickname,
      password: this.getPassword,
    };
  }
}

export interface UserToDB extends UserInputDTO {
  id: string;
}

export interface UserInputDTO {
  name: string;
  email: string;
  nickname: string;
  password: string;
}
