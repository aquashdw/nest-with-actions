import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BattingSide {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  side: string;
}