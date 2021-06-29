export class Album {
  constructor(private id: string, private album: string) {}

  public get getAlbum(): string {
    return this.album;
  }
  public set setAlbum(value: string) {
    this.album = value;
  }
  public get getId(): string {
    return this.id;
  }
  public set setId(value: string) {
    this.id = value;
  }

  public albumToDb(): AlbumToDB {
    return { album: this.getAlbum, id: this.getId };
  }
}

export interface AlbumToDB {
  id: string;
  album: string;
}
