import { Either, Right } from 'purify-ts';

import { Tournament } from 'src/domain/entities/tournament';
import TournamentRepository from 'src/infra/database/repository/tournament.repository';

type CreateTournamentRequest = {
  title: string;
  description: string;
};

type CreateTournamentResponse = Either<null, Tournament>;

export class CreateTournamentUseCase {
  constructor(private tournamentRepository: TournamentRepository) {}

  async handle({
    title,
    description,
  }: CreateTournamentRequest): Promise<CreateTournamentResponse> {
    const tournament = Tournament.create({
      title,
      description,
    });

    await this.tournamentRepository.create(tournament);

    return Right(tournament);
  }
}
