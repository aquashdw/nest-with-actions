import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Team } from './entities/team.entitiy';

@Controller('teams')
export class TeamsController {
  @Get()
  readAllTeams(): Team[] {
    return null;
  }

  @Get('/:id')
  readTeam(@Param('id') playerId: number): Team {
    return null;
  }

  @Post('')
  createTeam() {
    return null;
  }

  @Patch('/:id')
  updateTeam(@Param('id') playerId: number) {
    return null;
  }

  @Delete('/:id')
  deleteTeam() {
    return null;
  }
}
