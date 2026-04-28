import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Repository } from "typeorm";
import { User } from "users/users.entity";
import { UserRole } from "users/users.enum";

export type JwtPayload = {
    id: string,
    username: string,
    role: UserRole
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {

    constructor(
        configService: ConfigService,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get<string>('JWT_SECRET') || 'THAT IS A DEFAUL SECKRET HH',
        });
    }

    async validate(payload: JwtPayload): Promise<User> {
        try {
            const user = await this.userRepository.findOneByOrFail({id: payload.id});
            return user;
        } catch (error) {
            throw new UnauthorizedException('User is not authorized.');
        }
    }
}