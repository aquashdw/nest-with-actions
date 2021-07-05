import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { League } from '../leagues/entities/league.entity';
import { Region } from '../region/entities/region.entity';
import { Team } from './entities/team.entitiy';
import { Player } from '../players/entities/player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player, Team, League, Region])],
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
