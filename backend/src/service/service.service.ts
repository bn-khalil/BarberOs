import { Injectable } from '@nestjs/common';
import { ServiceDto } from './dto/serviceDto';
import { serviceRepository } from './service.repository';
import { UserDto } from 'users/dto/AuthDto';
import { Service } from './service.entity';

@Injectable()
export class ServiceService {

    constructor(private readonly serviceRepository: serviceRepository){}

    async getAllServices () : Promise<ServiceDto[]>{
        try {
            const services = await this.serviceRepository.manager.find();
            let serviceDtos: ServiceDto[] =  services.map((service: Service) => ServiceDto.fromEntity(service));
            return serviceDtos;
        } catch (error) {
            throw error
        }
    }

    addNewService(serviceDto: ServiceDto) {
        try {
            this.serviceRepository.manager.save(ServiceDto.fromDto(serviceDto));
        } catch (error) {
            throw error;
        }
    }
}
