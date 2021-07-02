import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Player } from './entities/player.entity';

@Controller('players')
export class PlayersController {
  @Get()
  readAllPlayers(): Player[] {
    return null;
  }

  @Get('/:id')
  readPlayer(@Param('id') playerId: number): Player {
    return null;
  }

  @Post('')
  createPlayer() {
    return null;
  }

  @Patch('/:id')
  updatePlayer(@Param('id') playerId: number) {
    return null;
  }

  @Delete('/:id')
  deletePlayer() {
    return null;
  }
}
