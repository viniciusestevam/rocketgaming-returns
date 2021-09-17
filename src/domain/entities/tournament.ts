import { Entity } from 'src/core/domain/entity';

type TournamentProps = {
  title: string;
  description: string;
};

export class Tournament extends Entity<TournamentProps> {
  private constructor(props: TournamentProps, id?: string) {
    super(props, id);
  }

  get title(): string {
    return this.props.title;
  }

  get description(): string {
    return this.props.description;
  }

  static create(props: TournamentProps, id?: string): Tournament {
    const tournament = new Tournament(props, id);

    return tournament;
  }
}
