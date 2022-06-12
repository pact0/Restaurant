import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @ManyToOne((type) => UserEntity, (user) => user.orders)
  userId: UserEntity;

  @Column('simple-array')
  productsOrdered: string[];

  @Column()
  status: string;
}
