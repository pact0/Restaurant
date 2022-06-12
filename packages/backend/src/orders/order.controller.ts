import {
  Get,
  Post,
  Body,
  Put,
  Delete,
  Query,
  Param,
  Controller,
} from '@nestjs/common';
import { Request } from 'express';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto';
import { OrdersRO, OrderRO } from './order.interface';
import { User } from '../user/user.decorator';

import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('orders')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({ status: 200, description: 'Return all orders.' })
  @Get()
  async findAll(@Query() query): Promise<OrdersRO> {
    return await this.orderService.findAll(query);
  }

  // @ApiOperation({ summary: 'Get order feed' })
  // @ApiResponse({ status: 200, description: 'Return order feed.'})
  // @ApiResponse({ status: 403, description: 'Forbidden.' })
  // @Get('feed')
  // async getFeed(@User('id') userId: number, @Query() query): Promise<OrdersRO> {
  //   return await this.orderService.findFeed(userId, query);
  // }

  @Get(':slug')
  async findOne(@Param('slug') slug): Promise<OrderRO> {
    return await this.orderService.findOne({ slug });
  }

  @ApiOperation({ summary: 'Create order' })
  @ApiResponse({
    status: 201,
    description: 'The order has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  async create(
    @User('id') userId: number,
    @Body('order') orderData: CreateOrderDto,
  ) {
    return this.orderService.create(userId, orderData);
  }

  @ApiOperation({ summary: 'Update order' })
  @ApiResponse({
    status: 201,
    description: 'The order has been successfully updated.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put(':slug')
  async update(@Param() params, @Body('order') orderData: CreateOrderDto) {
    // Todo: update slug also when title gets changed
    return this.orderService.update(params.slug, orderData);
  }

  @ApiOperation({ summary: 'Delete order' })
  @ApiResponse({
    status: 201,
    description: 'The order has been successfully deleted.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':slug')
  async delete(@Param() params) {
    return this.orderService.delete(params.slug);
  }
}
