import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PitchStyle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hand: string;

  @Column()
  style: string;
}