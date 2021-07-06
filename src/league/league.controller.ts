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
import { League } from './entities/league.entity';
import { LeagueService } from './league.service';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';

@Controller('league')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @Get()
  async readAllLeagues(): Promise<League[]> {
    return await this.leagueService.findAllLeagues();
  }

  @Get('/:id')
  async readLeague(@Param('id') leagueId: number): Promise<League> {
    return await this.leagueService.findOne(leagueId);
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async createLeague(@Body() createLeagueDto: CreateLeagueDto) {
    return await this.leagueService.createLeague(createLeagueDto);
  }

  @Patch('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  async updateLeague(
    @Param('id') leagueId: number,
    @Body() updateLeagueDto: UpdateLeagueDto,
  ) {
    return await this.leagueService.updateLeague(leagueId, updateLeagueDto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  async deleteLeague(@Param('id') leagueId: number) {
    return await this.leagueService.deleteLeague(leagueId);
  }
}
