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
import { ArticleService } from './article.service';
import { CreateOrderDto } from './dto';
import { ArticlesRO, ArticleRO } from './article.interface';
import { User } from '../user/user.decorator';

import {
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('articles')
@Controller('articles')
export class OrderController {
  constructor(private readonly articleService: ArticleService) {}

  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({ status: 200, description: 'Return all orders.' })
  @Get()
  async findAll(@Query() query): Promise<OrdersRO> {
    return await this.articleService.findAll(query);
  }

  // @ApiOperation({ summary: 'Get article feed' })
  // @ApiResponse({ status: 200, description: 'Return article feed.'})
  // @ApiResponse({ status: 403, description: 'Forbidden.' })
  // @Get('feed')
  // async getFeed(@User('id') userId: number, @Query() query): Promise<ArticlesRO> {
  //   return await this.articleService.findFeed(userId, query);
  // }

  @Get(':slug')
  async findOne(@Param('slug') slug): Promise<ArticleRO> {
    return await this.articleService.findOne({ slug });
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
    return this.articleService.create(userId, orderData);
  }

  @ApiOperation({ summary: 'Update article' })
  @ApiResponse({
    status: 201,
    description: 'The article has been successfully updated.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put(':slug')
  async update(
    @Param() params,
    @Body('order') articleData: CreateOrderDto,
  ) {
    // Todo: update slug also when title gets changed
    return this.articleService.update(params.slug, orderData);
  }

  @ApiOperation({ summary: 'Delete order' })
  @ApiResponse({
    status: 201,
    description: 'The order has been successfully deleted.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':slug')
  async delete(@Param() params) {
    return this.articleService.delete(params.slug);
  }
