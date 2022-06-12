import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => UserEntity, (user) => user.articles)
  userId: UserEntity;

  @Column('simple-array')
  productsOrdered: string[];

  @Column()
  status: string;
}
