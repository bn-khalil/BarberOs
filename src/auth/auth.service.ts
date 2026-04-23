import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UserDto, UserLoginDto, UserRegisterBarberDto, UserRegisterDto } from 'users/dto/AuthDto';
import { userRepository } from 'users/users.repository';

@Injectable()
export class AuthService {

    constructor(private readonly userRepository: userRepository){}

    async register(userdto: UserRegisterDto): Promise<UserDto> {
        try{
            const user = await this.userRepository.findUserByPhone(userdto.phone_number);
            if (user)
                throw new ConflictException(`User with this phone already exist!`);
            const savedUser = await this.userRepository.createUser(UserRegisterDto.fromDto(userdto));

            return UserDto.fromEntity(savedUser);
        } catch(error) {
            throw error;
        }
    }

    async loing(userdto: UserLoginDto): Promise<{message: string}> {
        try{
            const user = await this.userRepository.findUserByPhone(userdto.phone_number);
            if (!user)
                throw new ConflictException(`User with this phone not exist!`);
            console.log(user.password)
            console.log(userdto.password)

            if (user.password != userdto.password)
                throw new ConflictException(`Password not matching`);
            console.log(user)

            return {message: "login secsessfuly completed!"};
        } catch(error) {
            throw error;
        }
    }

}
