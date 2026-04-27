import { Controller, Param, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put(':id/toggle/tobarber')
  toggleToBarber(@Param() params: any){
    console.log(params.id);
  }
}
