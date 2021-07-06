import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { League } from '../league/entities/league.entity';
import { Region } from '../region/entities/region.entity';
import { Team } from './entities/team.entitiy';
import { Player } from '../players/entities/player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player, Team, League, Region])],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
