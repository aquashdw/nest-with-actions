import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Region } from '../../region/entities/region.entity';
import { Position } from './position.entity';
import { PitchStyle } from './pitch.entity';
import { BattingSide } from './batting.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @ManyToOne(() => Position, (position) => position.id)
  mainPosition: Position;

  @ManyToOne(() => PitchStyle, (pitchStyle) => pitchStyle.id)
  pitch: PitchStyle;

  @ManyToOne(() => BattingSide, (battingSide) => battingSide.id)
  batting: BattingSide;

  @ManyToOne(() => Region, (region) => region.id)
  region: Region;
}
