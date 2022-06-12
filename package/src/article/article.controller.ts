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
import { CreateArticleDto } from './dto';
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
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @ApiOperation({ summary: 'Get all articles' })
  @ApiResponse({ status: 200, description: 'Return all articles.' })
  @Get()
  async findAll(@Query() query): Promise<ArticlesRO> {
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

  @ApiOperation({ summary: 'Create article' })
  @ApiResponse({
    status: 201,
    description: 'The article has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  async create(
    @User('id') userId: number,
    @Body('article') articleData: CreateArticleDto,
  ) {
    return this.articleService.create(userId, articleData);
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
    @Body('article') articleData: CreateArticleDto,
  ) {
    // Todo: update slug also when title gets changed
    return this.articleService.update(params.slug, articleData);
  }

  @ApiOperation({ summary: 'Delete article' })
  @ApiResponse({
    status: 201,
    description: 'The article has been successfully deleted.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':slug')
  async delete(@Param() params) {
    return this.articleService.delete(params.slug);
  }

  @ApiOperation({ summary: 'Favorite article' })
  @ApiResponse({
    status: 201,
    description: 'The article has been successfully favorited.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post(':slug/favorite')
  async favorite(@User('id') userId: number, @Param('slug') slug) {
    return await this.articleService.favorite(userId, slug);
  }

  @ApiOperation({ summary: 'Unfavorite article' })
  @ApiResponse({
    status: 201,
    description: 'The article has been successfully unfavorited.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':slug/favorite')
  async unFavorite(@User('id') userId: number, @Param('slug') slug) {
    return await this.articleService.unFavorite(userId, slug);
  }
}
