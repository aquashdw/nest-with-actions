import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Region } from '../region/entities/region.entity';
import { Position } from './entities/position.entity';
import { PitchStyle } from './entities/pitch.entity';
import { BattingSide } from './entities/batting.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Player,
      Position,
      PitchStyle,
      BattingSide,
      Region,
    ]),
  ],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
