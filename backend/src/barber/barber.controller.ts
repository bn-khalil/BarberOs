import { Body, Controller, HttpCode, HttpStatus, Param, Patch, Put, UseGuards } from '@nestjs/common';
import { BarberService } from './barber.service';
import { JwtAuthGuard } from 'auth/auth.guard';
import { UserRegisterBarberDto } from './dto/barberDto';
import { Roles } from 'users/user.role';
import { UserRole } from 'users/users.enum';
import { RolesGuard } from 'users/users.Roleguard';

@Controller('barber/')
@UseGuards(JwtAuthGuard, RolesGuard)
export class BarberController {
    constructor(private readonly barberService: BarberService) {}
    
    @Patch(':id/upgrade-to-barber')
    @Roles(UserRole.ADMIN)
    @HttpCode(HttpStatus.CREATED)
    async toggleToBarber(
        @Param('id') id: string,
        @Body() userRegisterBarberDto: UserRegisterBarberDto,
    ){
        const barber = await this.barberService.createBarber(userRegisterBarberDto, id);
        return UserRegisterBarberDto.fromEntity(barber);
    }
}
