import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { UserEntity } from '../user/user.entity';
import { OrderService } from './order.service';
import { AuthMiddleware } from '../user/auth.middleware';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, UserEntity]),
    UserModule,
  ],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'orders', method: RequestMethod.GET },
        { path: 'orders', method: RequestMethod.POST },
        { path: 'orders/:slug', method: RequestMethod.DELETE },
        { path: 'orders/:slug', method: RequestMethod.PUT },
      );
  }
}
