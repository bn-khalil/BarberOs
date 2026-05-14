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

    private async togleBarberBack(ownerId: string){
        const barber = await this.barberRepository.manager.findOne({
            where:{owner:{id: ownerId}}, 
            relations:{owner: true},
            withDeleted: true,
        });
        if (!barber)
            return false;

        return true;
    }

    async createBarber(userRegisterBarberDto: UserRegisterBarberDto, ownerId: string) {

        const owner = await this.userRepository.findUserById(ownerId);
        if (!owner)
            throw new NotFoundException("the user wants to make it barber not exists!");

        const barber = await this.barberRepository.manager.findOne({
            where:{owner:{id: ownerId}}, 
            relations:{owner: true},
            withDeleted: true,
        });
        if (barber) {
            if (barber.deletedAt === null)
                throw new ConflictException("this user aleady a barber");
            barber.owner.role = UserRole.BARBER;
            barber.deletedAt = null;
            barber.experience_years = userRegisterBarberDto.experience_years;
            barber.status = userRegisterBarberDto.status,
            barber.working_hours = userRegisterBarberDto.working_hours
            await this.userRepository.manager.save(barber.owner);
            return await this.barberRepository.manager.save(barber);
        }

        owner.role = UserRole.BARBER;
        const newBarber = await this.barberRepository.manager.save({
                experience_years: userRegisterBarberDto.experience_years,
                status: userRegisterBarberDto.status,
                working_hours: userRegisterBarberDto.working_hours,
                owner: owner
        });
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

    async deleteBarber(userId: string){
        try {
            const barber = await this.barberRepository.manager.findOne({where: {id: userId}, relations:{owner: true}});
            if (!barber)
                throw new NotFoundException("the barber wants to delete not exists!");
            barber.owner.role = UserRole.CUSTOMER;
            await this.userRepository.manager.save(barber.owner);
            await this.barberRepository.manager.softDelete(barber.id)
        } catch (error){
            throw error;
        }
    }
}
