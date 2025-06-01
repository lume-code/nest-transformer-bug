import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SMSProviderEntity {
  @PrimaryGeneratedColumn()
  id!: number;
}
