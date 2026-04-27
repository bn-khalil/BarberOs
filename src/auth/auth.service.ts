import { ConflictException, Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { barberDto } from 'barber/dto/barberDto';
import { UserDto, UserLoginDto, UserRegisterBarberDto, UserRegisterDto } from 'users/dto/AuthDto';
import { userRepository } from 'users/users.repository';
import * as bcrypt from 'bcrypt';

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

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(userdto.password, salt);

            const userEntity = UserRegisterDto.fromDto(userdto);

            userEntity.password = hashedPassword;

            const savedUser = await this.userRepository.createUser(userEntity);

            return UserDto.fromEntity(savedUser);
        } catch(error) {
            throw error;
        }
    }

    async singIn(userdto: UserLoginDto): Promise<{token: string}> {
        const user = await this.userRepository.findUserByPhone(userdto.phone_number);
        if (!user)
            throw new ConflictException(`User with this phone not exist!`);

        const isPasswordValid = await bcrypt.compare(userdto.password, user.password);
        if (!isPasswordValid)
            throw new UnauthorizedException(`Invalid Password`);

        const payload = { 
            sub: user.id,
            username: user.first_name + " " + user.last_name,
            role: user.role
        };

        const token : string = await this.jwtService.signAsync(payload);

        return {token: token};
    }



}
