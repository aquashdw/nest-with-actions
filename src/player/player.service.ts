import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Repository } from 'typeorm';
import { Region } from '../region/entities/region.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Position } from './entities/position.entity';
import { PitchStyle } from './entities/pitch.entity';
import { BattingSide } from './entities/batting.entity';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    @InjectRepository(Position)
    private readonly positionRepository: Repository<Position>,
    @InjectRepository(PitchStyle)
    private readonly pitchStyleRepository: Repository<PitchStyle>,
    @InjectRepository(BattingSide)
    private readonly battingSideRepository: Repository<BattingSide>,
    @InjectRepository(Region)
    private readonly regionRepository: Repository<Region>,
  ) {}

  async findAllPlayers(): Promise<Player[]> {
    return this.playerRepository.find();
  }

  async findOne(playerId: number): Promise<Player> {
    return this.playerRepository
      .findOneOrFail({ id: playerId })
      .catch((reason) => {
        throw new NotFoundException(`player with id: ${playerId} not found`);
      });
  }

  async createPlayer(createPlayerDto: CreatePlayerDto) {
    const createEntity = new Player();
    createEntity.username = createPlayerDto.username;
    createEntity.name = createPlayerDto.name;
    createEntity.age = createPlayerDto.age;

    if (createPlayerDto.region != null) {
      createEntity.region = await this.regionRepository
        .findOneOrFail({ id: createPlayerDto.region })
        .catch((reason) => {
          throw new NotFoundException(
            `region id: ${createPlayerDto.region} not found`,
          );
        });
    }

    if (createPlayerDto.mainPosition != null) {
      createEntity.mainPosition = await this.positionRepository
        .findOneOrFail({ id: createPlayerDto.mainPosition })
        .catch((reason) => {
          throw new NotFoundException(
            `position id: ${createPlayerDto.mainPosition} not found`,
          );
        });
    }

    if (createPlayerDto.battingSide != null) {
      createEntity.batting = await this.battingSideRepository
        .findOneOrFail({ id: createPlayerDto.battingSide })
        .catch((reason) => {
          throw new NotFoundException(
            `batting id: ${createPlayerDto.battingSide} not found`,
          );
        });
    }

    if (createPlayerDto.pitchStyle != null) {
      createEntity.pitch = await this.pitchStyleRepository
        .findOneOrFail({ id: createPlayerDto.pitchStyle })
        .catch((reason) => {
          throw new NotFoundException(
            `pitch id: ${createPlayerDto.pitchStyle} not found`,
          );
        });
    }

    await this.playerRepository.insert(createEntity);
  }

  async updatePlayer(playerId: number, updatePlayerDto: UpdatePlayerDto) {
    const updateEntity = await this.playerRepository
      .findOneOrFail({ id: playerId })
      .catch((reason) => {
        throw new NotFoundException(`player id: ${playerId} not found`);
      });

    if (updatePlayerDto.name != null) {
      updateEntity.name = updatePlayerDto.name;
    }

    if (updatePlayerDto.age != null) {
      updateEntity.age = updatePlayerDto.age;
    }

    if (updatePlayerDto.region != null) {
      updateEntity.region = await this.regionRepository
        .findOneOrFail({ id: updatePlayerDto.region })
        .catch((reason) => {
          throw new NotFoundException(
            `region id: ${updatePlayerDto.region} not found`,
          );
        });
    }

    if (updatePlayerDto.mainPosition != null) {
      updateEntity.mainPosition = await this.positionRepository
        .findOneOrFail({ id: updatePlayerDto.mainPosition })
        .catch((reason) => {
          throw new NotFoundException(
            `position id: ${updatePlayerDto.mainPosition} not found`,
          );
        });
    }

    if (updatePlayerDto.battingSide != null) {
      updateEntity.batting = await this.battingSideRepository
        .findOneOrFail({ id: updatePlayerDto.battingSide })
        .catch((reason) => {
          throw new NotFoundException(
            `batting id: ${updatePlayerDto.battingSide} not found`,
          );
        });
    }

    if (updatePlayerDto.pitchStyle != null) {
      updateEntity.pitch = await this.pitchStyleRepository
        .findOneOrFail({ id: updatePlayerDto.pitchStyle })
        .catch((reason) => {
          throw new NotFoundException(
            `pitch id: ${updatePlayerDto.pitchStyle} not found`,
          );
        });
    }
    await this.playerRepository.save(updateEntity);
  }

  async deletePlayer(playerId: number) {
    await this.playerRepository.delete({ id: playerId });
  }
}
