import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { League } from './entities/league.entity';

@Controller('leagues')
export class LeaguesController {
  @Get()
  readAllLeagues(): League[] {
    return null;
  }

  @Get('/:id')
  readLeague(@Param('id') leagueId: number): League {
    return null;
  }

  @Post('')
  createLeague() {
    return null;
  }

  @Patch('/:id')
  updateLeague(@Param('id') leagueId: number) {
    return null;
  }

  @Delete('/:id')
  deleteLeague() {
    return null;
  }
}
