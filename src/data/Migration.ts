import BaseDatebase from './BaseDatabase';

export default class Migration extends BaseDatebase {
  public async migrate(): Promise<string> {
    try {
      await this.createUserTable();
      await this.createAlbumTable();
      await this.createMusicTable();
      await this.createGenreTable();
      await this.createMusicHasGenreTable();

      return 'Sucess';
    } catch (error) {
      return error;
    }
  }

  private async createUserTable() {
    const exist = await BaseDatebase.knexConnection.schema.hasTable(
      this.userTable
    );

    if (!exist) {
      await BaseDatebase.knexConnection.schema.createTable(
        this.userTable,
        table => {
          table.string('nickname', 16).notNullable().unique('nickname');
          table.string('email', 255).notNullable().unique('email');
          table.string('password', 255).notNullable();
          table
            .timestamp('create_at')
            .notNullable()
            .defaultTo(BaseDatebase.knexConnection.fn.now());
          table.string('id', 255).primary().notNullable();
        }
      );
    }
  }

  private async createMusicTable() {
    const exist = await BaseDatebase.knexConnection.schema.hasTable(
      this.musictTable
    );

    if (!exist) {
      await BaseDatebase.knexConnection.schema.createTable(
        this.musictTable,
        table => {
          table.string('id', 255).notNullable().primary();
          table.string('subtitle', 255).notNullable();
          table.string('author', 255).notNullable();
          table
            .timestamp('date')
            .notNullable()
            .defaultTo(BaseDatebase.knexConnection.fn.now());
          table.string('file', 255).notNullable();
          table.string('album', 255).notNullable();
          table.string('user_id', 255).notNullable();
          table
            .foreign('author')
            .references(`${this.userTable}.id`)
            .onDelete('CASCADE');
          table
            .foreign('album')
            .references(`${this.albumTable}.id`)
            .onDelete('CASCADE');
        }
      );
    }
  }

  private async createAlbumTable() {
    const exist = await BaseDatebase.knexConnection.schema.hasTable(
      this.albumTable
    );

    if (!exist) {
      await BaseDatebase.knexConnection.schema.createTable(
        this.albumTable,
        table => {
          table.string('id', 255).notNullable().primary();
          table.string('album', 255).notNullable().unique('album');
        }
      );
    }
  }

  private async createGenreTable() {
    const exist = await BaseDatebase.knexConnection.schema.hasTable(
      this.genreTable
    );

    if (!exist) {
      await BaseDatebase.knexConnection.schema.createTable(
        this.genreTable,
        table => {
          table.string('id', 255).notNullable().primary();
          table.string('genre', 100).notNullable().unique('genre');
        }
      );
    }
  }

  private async createMusicHasGenreTable() {
    const exist = await BaseDatebase.knexConnection.schema.hasTable(
      this.musicHasGenreTable
    );

    if (!exist) {
      await BaseDatebase.knexConnection.schema.createTable(
        this.musicHasGenreTable,
        table => {
          table.string('music_id', 255).notNullable();
          table.string('genre_id', 255).notNullable();
          table.primary(['music_id', 'genre_id']);
          table
            .foreign('music_id')
            .references(`${this.musictTable}.id`)
            .onDelete('CASCADE');

          table
            .foreign('genre_id')
            .references(`${this.genreTable}.id`)
            .onDelete('CASCADE');
        }
      );
    }
  }
}

const migration = new Migration();

migration
  .migrate()
  .then(value => {
    console.log(value);
    BaseDatebase.closeConnection();
    process.exit(0);
  })
  .catch(error => {
    console.log(error);
    BaseDatebase.closeConnection();
    process.exit(1);
  });
