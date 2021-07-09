import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Player } from './entities/player.entity';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller('player')
export class PlayerController {
  constructor(private readonly playersService: PlayerService) {}

  @Get()
  async readAllPlayers(): Promise<Player[]> {
    return await this.playersService.findAllPlayers();
  }

  @Get('/:id')
  async readPlayer(@Param('id') playerId: number): Promise<Player> {
    return await this.playersService.findOne(playerId);
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    return await this.playersService.createPlayer(createPlayerDto);
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  async updatePlayer(
    @Param('id') playerId: number,
    updatePlayerDto: UpdatePlayerDto,
  ) {
    return await this.playersService.updatePlayer(playerId, updatePlayerDto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  async deletePlayer(@Param('id') playerId: number) {
    return await this.playersService.deletePlayer(playerId);
  }
}
