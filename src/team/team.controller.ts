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
import { Team } from './entities/team.entitiy';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamsService: TeamService) {}

  @Get()
  async readAllTeams(): Promise<Team[]> {
    return await this.teamsService.findAllTeams();
  }

  @Get('/:id')
  async readTeam(@Param('id') teamId: number): Promise<Team> {
    return await this.teamsService.findOne(teamId);
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async createTeam(@Body() createTeamDto: CreateTeamDto) {
    await this.teamsService.createTeam(createTeamDto);
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  async updateTeam(
    @Param('id') teamId: number,
    @Body() updateTeamDto: UpdateTeamDto,
  ) {
    await this.teamsService.updateTeam(teamId, updateTeamDto);
  }

  @Delete('/:id')
  async deleteTeam(@Param('id') teamId: number) {
    await this.teamsService.deleteTeam(teamId);
  }
}
