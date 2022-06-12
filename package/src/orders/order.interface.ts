import { UserData } from '../user/user.interface';
import { OrderEntity } from './order.entity';

interface OrderData {
  productsOrdered: string[];
  createdAt?: Date;
  updatedAt?: Date;
  userId?: UserData;
}

export interface OrderRO {
  order: OrderEntity;
}

export interface OrdersRO {
  orders: OrderEntity[];
  ordersCount: number;
}
