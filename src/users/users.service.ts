import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {

    private user : User[];

    getUser(): void{
        this.user.push()
    }
}
