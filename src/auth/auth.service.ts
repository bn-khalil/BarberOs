import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UserDto } from 'users/dto/AuthDto';
import { userRepository } from 'users/users.repository';

@Injectable()
export class AuthService {

    constructor(private readonly userRepository: userRepository){}

    async register(userdto: UserDto): Promise<UserDto> {
        try{
            const user = await this.userRepository.findUserByPhone(userdto.phone_number);
            if (user)
                throw new ConflictException(`User with this phone already exist!`);
            const savedUser = await this.userRepository.save(UserDto.fromDto(userdto));
            userdto.id = savedUser.id;
            return userdto;
        } catch(error) {
            if (error instanceof NotFoundException)
                throw error;
            throw new InternalServerErrorException("Something went wrong while fetching the user")
        }
    }

}
