import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { User } from './users.entity';
import { userRepository } from './users.repository';
import { UserDto } from './dto/AuthDto';

@Injectable()
export class UsersService {

    constructor(private readonly userRepository: userRepository){}

    async getUser(id : string): Promise<UserDto> {
        try {
            const user = await this.userRepository.findUser(id);
            if (!user)
                throw new NotFoundException(`User with this id = ${id} not found!`);
            return UserDto.fromEntity(user);
        } catch (error){
            if (error instanceof NotFoundException)
                throw error;
            throw new InternalServerErrorException("Something went wrong while fetching the user")
        }
    }
    
}
