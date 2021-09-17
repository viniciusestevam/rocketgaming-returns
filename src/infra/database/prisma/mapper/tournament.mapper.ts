import { Tournament as RawTournament } from '.prisma/client';
import { Tournament } from 'src/domain/entities/tournament';

export class TournamentMapper {
  static toPersistence(tournament: Tournament) {
    return {
      id: tournament.id,
      title: tournament.title,
      description: tournament.description,
    };
  }

  static toDomain(raw: RawTournament): Tournament {
    return Tournament.create(
      {
        description: raw.description,
        title: raw.title,
      },
      raw.id,
    );
  }
}
