import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PlayersModule } from './players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './players/entities/players.entity';
import { Region } from './entities/app.entity';
import { Position } from './players/entities/position.entity';
import { PitchStyle } from './players/entities/pitch.entity';
import { BattingSide } from './players/entities/batting.entity';
import { TeamsModule } from './teams/teams.module';
import { Team } from './teams/entities/team.entitiy';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'password',
      database: 'b_players',
      entities: [Region, Position, PitchStyle, BattingSide, Player, Team],
      autoLoadEntities: true,
      synchronize: true,
      insecureAuth: true,
    }),
    PlayersModule,
    TeamsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}