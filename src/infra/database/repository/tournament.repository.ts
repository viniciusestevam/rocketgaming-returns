import { Tournament } from 'src/domain/entities/tournament';

export default abstract class TournamentRepository {
  abstract create(tournament: Tournament): Promise<Tournament>;
}
