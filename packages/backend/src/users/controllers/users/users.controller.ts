import { Controller, Get, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ){}

  @Get('')
  getUsers(){
    return this.usersService.getUsers()
  }
}
