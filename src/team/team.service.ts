import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entities/team.entitiy';
import { Repository } from 'typeorm';
import { Player } from '../players/entities/player.entity';
import { League } from '../league/entities/league.entity';
import { Region } from '../region/entities/region.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private readonly teamRepository: Repository<Team>,
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    @InjectRepository(League)
    private readonly leagueRepository: Repository<League>,
    @InjectRepository(Region)
    private readonly regionRepository: Repository<Region>,
  ) {}

  findAllTeams(): Promise<Team[]> {
    return this.teamRepository.find();
  }

  findOne(teamId: number): Promise<Team> {
    return this.teamRepository.findOneOrFail(teamId).catch((reason) => {
      throw new NotFoundException(`team with id: ${teamId} not found`);
    });
  }

  async createTeam(createTeamDto: CreateTeamDto) {
    const createEntity = new Team();
    createEntity.name = createTeamDto.name;

    createEntity.region = await this.regionRepository
      .findOneOrFail({
        id: createTeamDto.regionId,
      })
      .catch((reason) => {
        throw new NotFoundException(
          `region with id: ${createTeamDto.regionId} not found`,
        );
      });

    if (createTeamDto.players != null) {
      createEntity.teamPlayers = await this.playerRepository.findByIds(
        createTeamDto.players,
      );
    }

    await this.teamRepository.insert(createEntity);
  }

  async updateTeam(teamId: number, updateTeamDto: UpdateTeamDto) {
    const updateTarget = await this.teamRepository
      .findOneOrFail({ id: teamId })
      .catch((reason) => {
        throw new NotFoundException(`team with id: ${teamId} not found`);
      });

    if (updateTeamDto.name != null) {
      updateTarget.name = updateTeamDto.name;
    }

    if (updateTeamDto.regionId != null) {
      updateTarget.region = await this.regionRepository
        .findOneOrFail({ id: updateTeamDto.regionId })
        .catch((reason) => {
          throw new NotFoundException(
            `region with id: ${updateTeamDto.regionId} not found`,
          );
        });

      if (updateTeamDto.players != null) {
        updateTarget.teamPlayers = await this.playerRepository.findByIds([
          updateTeamDto.players,
        ]);
      }

      await this.teamRepository.save(updateTarget);
    }
  }

  async deleteTeam(teamId: number) {
    await this.teamRepository.delete({ id: teamId });
  }
}
