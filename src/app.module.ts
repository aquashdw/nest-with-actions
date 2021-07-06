import { Logger, Module } from '@nestjs/common';
import { PlayerModule } from './player/player.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './player/entities/player.entity';
import { Region } from './region/entities/region.entity';
import { Position } from './player/entities/position.entity';
import { PitchStyle } from './player/entities/pitch.entity';
import { BattingSide } from './player/entities/batting.entity';
import { TeamModule } from './team/team.module';
import { Team } from './team/entities/team.entitiy';
import { LeagueModule } from './league/league.module';
import { League } from './league/entities/league.entity';
import { RegionModule } from './region/region.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3307,
      username: 'nest',
      password: 'password',
      database: 'b_players',
      entities: [
        Region,
        Position,
        PitchStyle,
        BattingSide,
        Player,
        Team,
        League,
      ],
      autoLoadEntities: true,
      synchronize: true,
      insecureAuth: true,
    }),
    PlayerModule,
    TeamModule,
    LeagueModule,
    RegionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
