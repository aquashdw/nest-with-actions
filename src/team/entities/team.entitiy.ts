import { Region } from '../../region/entities/region.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Player } from '../../players/entities/player.entity';
import { options } from 'tsconfig-paths/lib/options';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Region, (region) => region.id)
  region: Region;

  @ManyToMany((player) => Player, {
    cascade: true,
  })
  @JoinTable({ name: 'team_players' })
  teamPlayers: Player[];
}
