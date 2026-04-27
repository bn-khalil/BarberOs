import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { barberDto } from 'barber/dto/barberDto';
import { UserDto, UserLoginDto, UserRegisterBarberDto, UserRegisterDto } from 'users/dto/AuthDto';
import { userRepository } from 'users/users.repository';

@Injectable()
export class AuthService {

    constructor(
        private readonly userRepository: userRepository,
        private readonly jwtService: JwtService
    ){}

    async singUp(userdto: UserRegisterDto): Promise<UserDto> {
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

    async singIn(userdto: UserLoginDto): Promise<{token: string}> {
        try{
            const user = await this.userRepository.findUserByPhone(userdto.phone_number);
            if (!user)
                throw new ConflictException(`User with this phone not exist!`);

            if (user.password != userdto.password)
                throw new ConflictException(`Invalid Password`);

            const payload = { 
                sub: user.id,
                username: user.first_name
            };

            const token : string = await this.jwtService.signAsync(payload);

            return {token: token};
        } catch(error) {
            throw error;
        }
    }

}
