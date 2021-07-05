import { Module } from '@nestjs/common';
import { LeagueService } from './league.service';
import { LeagueController } from './league.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { League } from './entities/league.entity';
import { Region } from '../region/entities/region.entity';
import { Team } from '../teams/entities/team.entitiy';

@Module({
  imports: [TypeOrmModule.forFeature([League, Region, Team])],
  controllers: [LeagueController],
  providers: [LeagueService],
})
export class LeagueModule {}
