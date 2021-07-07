export class Music {
  constructor(
    private id: string,
    private subtitle: string,
    private author: string,
    private file: string,
    private genre: string[],
    private album: string,
    private date?: string
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
  public get getDate(): string | undefined {
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
  public get getSubtitle(): string {
    return this.subtitle;
  }
  public set setSubtitle(value: string) {
    this.subtitle = value;
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
        subtitle: this.getSubtitle,
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
  author: string;
}

export interface MusicInputDTO {
  subtitle: string;
  date?: string;
  file: string;
  genre: string[];
  album: string;
}
