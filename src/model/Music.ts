export class Musica {
  constructor(
    private id: string,
    private title: string,
    private author: string,
    private file: string,
    private genre: string[],
    private album: string,
    private date: number = Date.now()
  ) {}

  public get getAlbum(): string {
    return this.album;
  }
  public set setAlbum(value: string) {
    this.album = value;
  }
  public get getGenre(): string[] {
    return this.genre;
  }
  public set getGenre(value: string[]) {
    this.genre = value;
  }
  public get getDate(): number {
    return this.date;
  }
  public set setDate(value: number) {
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
      data: {
        album: this.getAlbum,
        title: this.getTitle,
        author: this.getAuthor,
        date: this.getDate,
        file: this.getFile,
        id: this.getId,
      },
      genres: this.getGenre,
    };
  }
}

export interface MusicToDB {
  data: Omit<MusicData, 'genre'>;
  genres: string[];
}

interface MusicData extends MusicInputDTO {
  id: string;
}

export interface MusicInputDTO {
  title: string;
  author: string;
  date: number;
  file: string;
  genre: string[];
  album: string;
}
