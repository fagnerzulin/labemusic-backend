export class Genre {
  constructor(private id: string, private genre: string) {}

  public get getGenre(): string {
    return this.genre;
  }
  public set setGenre(value: string) {
    this.genre = value;
  }
  public get getId(): string {
    return this.id;
  }
  public set setId(value: string) {
    this.id = value;
  }

  public genreToDb(): GenreToDB {
    return {
      genre: this.getGenre,
      id: this.getId,
    };
  }
}

export interface GenreToDB {
  id: string;
  genre: string;
}

export default Genre;
