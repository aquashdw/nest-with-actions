import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Region } from '../../entities/region.entity';
import { Team } from '../../teams/entities/team.entitiy';

@Entity()
export class League {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Region, (region) => region.id)
  region: Region;

  @ManyToMany((team) => Team, {
    cascade: true,
  })
  @JoinTable({ name: 'league_teams' })
  leagueTeams: Team[];
}
