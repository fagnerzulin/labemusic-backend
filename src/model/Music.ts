import { Genre } from './Genre';
export class Musica {
  constructor(
    private id: string,
    private title: string,
    private author: string,
    private date: string,
    private file: string,
    private genre: Genre[],
    private album: string
  ) {}

  public get getAlbum(): string {
    return this.album;
  }
  public set setAlbum(value: string) {
    this.album = value;
  }
  public get getGenre(): Genre[] {
    return this.genre;
  }
  public set getGenre(value: Genre[]) {
    this.genre = value;
  }
  public get getDate(): string {
    return this.date;
  }
  public set setDate(value: string) {
    this.date = value;
  }
  public get getFile(): string {
    return this.file;
  }
  public set setFile(value: string) {
    this.file = value;
  }
  public get getAuthor(): string {
    return this.author;
  }
  public set setAuthor(value: string) {
    this.author = value;
  }
  public get getTitle(): string {
    return this.title;
  }
  public set setTitle(value: string) {
    this.title = value;
  }
  public get getId(): string {
    return this.id;
  }
  public set setId(value: string) {
    this.id = value;
  }

  public musicToDB(): MusicToDB {
    return {
      album: this.getAlbum,
      title: this.getTitle,
      author: this.getAuthor,
      date: this.getDate,
      file: this.getFile,
      genre: this.getGenre,
      id: this.getId,
    };
  }
}

export interface MusicToDB {
  id: string;
  title: string;
  author: string;
  date: string;
  file: string;
  genre: Genre[];
  album: string;
}
