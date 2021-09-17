import { PrismaService } from '../prisma.service';
import { Tournament } from 'src/domain/entities/tournament';

import TournamentRepository from '../../repository/tournament.repository';
import { TournamentMapper } from '../mapper/tournament.mapper';

export class PrismaTournamentRepository implements TournamentRepository {
  constructor(private prisma: PrismaService) {}

  async create(tournament: Tournament): Promise<Tournament> {
    const data = TournamentMapper.toPersistence(tournament);
    const raw = await this.prisma.tournament.create({ data });

    return TournamentMapper.toDomain(raw);
  }
}
