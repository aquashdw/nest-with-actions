import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { League } from './entities/league.entity';
import { Repository } from 'typeorm';
import { CreateLeagueDto } from './dto/create-league.dto';
import { Region } from '../region/entities/region.entity';
import { Team } from '../teams/entities/team.entitiy';
import { UpdateLeagueDto } from './dto/update-league.dto';

@Injectable()
export class LeagueService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
    @InjectRepository(League)
    private readonly leagueRepository: Repository<League>,
    @InjectRepository(Region)
    private readonly regionRepository: Repository<Region>,
  ) {}

  findAllLeagues(): Promise<League[]> {
    return this.leagueRepository.find();
  }

  findOne(leagueId: number): Promise<League> {
    return this.leagueRepository
      .findOneOrFail({ id: leagueId })
      .catch((reason) => {
        throw new NotFoundException(`league with id: ${leagueId} not found`);
      });
  }

  async createLeague(createLeagueDto: CreateLeagueDto) {
    const createEntity: League = new League();

    createEntity.region = await this.regionRepository
      .findOneOrFail({
        id: createLeagueDto.regionId,
      })
      .catch((reason) => {
        throw new NotFoundException(
          `region with id: ${createLeagueDto.regionId} not found`,
        );
      });

    if (createLeagueDto.teams != null) {
      createEntity.leagueTeams = await this.teamRepository.findByIds(
        createLeagueDto.teams,
      );
    }

    await this.leagueRepository.insert(createEntity);
  }

  async updateLeague(leagueId: number, updateLeagueDto: UpdateLeagueDto) {
    const updateTarget = await this.leagueRepository
      .findOneOrFail({ id: leagueId })
      .catch((reason) => {
        throw new NotFoundException(`league with id: ${leagueId} not found`);
      });

    updateTarget.name = updateLeagueDto.name;

    if (updateLeagueDto.regionId != null) {
      updateTarget.region = await this.regionRepository
        .findOneOrFail({
          id: updateLeagueDto.regionId,
        })
        .catch((reason) => {
          throw new NotFoundException(
            `region with id: ${updateLeagueDto.regionId} not found`,
          );
        });
    }

    if (updateLeagueDto.teams != null) {
      updateTarget.leagueTeams = await this.teamRepository.findByIds(
        updateLeagueDto.teams,
      );
    }
    await this.leagueRepository.save(updateTarget);
  }

  async deleteLeague(leagueId: number) {
    await this.leagueRepository.delete({ id: leagueId });
  }
}
