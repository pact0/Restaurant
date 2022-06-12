import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { OrderEntity } from './order.entity';
import { UserEntity } from '../user/user.entity';
import { CreateOrderDto } from './dto';

import { OrderRO, OrdersRO } from './order.interface';
const slug = require('slug');

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll(query): Promise<OrdersRO> {
    const qb = await getRepository(OrderEntity)
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.userId', 'userId');

    qb.where('1 = 1');

    if ('userId' in query) {
      const user = await this.userRepository.findOne({
        username: query.userId,
      });
      qb.andWhere('order.userId = :id', { id: user.id });
    }

    qb.orderBy('order.created', 'DESC');

    const ordersCount = await qb.getCount();

    if ('limit' in query) {
      qb.limit(query.limit);
    }

    if ('offset' in query) {
      qb.offset(query.offset);
    }

    const orders = await qb.getMany();

    return { orders, ordersCount };
  }

  // async findFeed(userId: number, query): Promise<ArticlesRO> {
  //   const _follows = await this.followsRepository.find( {followerId: userId});
  //
  //   if (!(Array.isArray(_follows) && _follows.length > 0)) {
  //     return {articles: [], articlesCount: 0};
  //   }
  //
  //   const ids = _follows.map(el => el.followingId);
  //
  //   const qb = await getRepository(ArticleEntity)
  //     .createQueryBuilder('article')
  //     .where('article.authorId IN (:ids)', { ids });
  //
  //   qb.orderBy('article.created', 'DESC');
  //
  //   const articlesCount = await qb.getCount();
  //
  //   if ('limit' in query) {
  //     qb.limit(query.limit);
  //   }
  //
  //   if ('offset' in query) {
  //     qb.offset(query.offset);
  //   }
  //
  //   const articles = await qb.getMany();
  //
  //   return {articles, articlesCount};
  // }

  async findOne(where): Promise<OrderRO> {
    const order = await this.orderRepository.findOne(where);
    return { order };
  }

  async create(
    userId: number,
    orderData: CreateOrderDto,
  ): Promise<OrderEntity> {
    let order = new OrderEntity();
    order.productsOrdered = orderData.productsOrdered;
    order.status = 'started';

    const newOrder = await this.orderRepository.save(order);

    return newOrder;
  }

  async update(slug: string, orderData: any): Promise<OrderRO> {
    let toUpdate = await this.orderRepository.findOne({ slug: slug });
    let updated = Object.assign(toUpdate, orderData);
    const order = await this.orderRepository.save(updated);
    return { order };
  }

  async delete(slug: string): Promise<DeleteResult> {
    return await this.orderRepository.delete({ slug: slug });
  }

  slugify(title: string) {
    return (
      slug(title, { lower: true }) +
      '-' +
      ((Math.random() * Math.pow(36, 6)) | 0).toString(36)
    );
  }
}
