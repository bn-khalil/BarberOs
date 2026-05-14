import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { userRepository } from 'users/users.repository';
import { BarberRepository } from './barber.repository';
import { UserRole } from 'users/users.enum';
import { barberDto, UserRegisterBarberDto } from './dto/barberDto';
import { Barber } from './barber.entity';

@Injectable()
export class BarberService {
    constructor(
        private readonly userRepository: userRepository,
        private readonly barberRepository: BarberRepository,
    ){}

    async createBarber(userRegisterBarberDto: UserRegisterBarberDto, ownerId: string) {

        const owner = await this.userRepository.findUserById(ownerId);
        if (!owner)
            throw new NotFoundException("the user wants to make it barber not exists!");

        const barber = await this.barberRepository.findBarberByOwner(ownerId);
        if (barber)
            throw new ConflictException("this user aleady a barber");

        owner.role = UserRole.BARBER;

        const newBarber = await this.barberRepository.manager.save({
                experience_years: userRegisterBarberDto.experience_years,
                status: userRegisterBarberDto.status,
                working_hours: userRegisterBarberDto.working_hours,
                owner: owner
        });
        console.log(newBarber)
        return newBarber;
    }

    async getAllBarbers(): Promise<barberDto[]>{
        try {
            const barbers = await this.barberRepository.manager.find({
                relations: {
                    owner: true
                }
            });
            let barberDtos: barberDto[] = barbers.map((barber: Barber) => barberDto.fromEntity(barber));
            return barberDtos;
        } catch (error){
            throw error;
        }
    }
}
