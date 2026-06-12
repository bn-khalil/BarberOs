import { Type } from "class-transformer";
import { Service } from "service/service.entity";

export class ServiceDto {
    id: string;
    title: string;
    description: string;
    @Type(() => Number)
    price: number;
    @Type(() => Number)
    duration: number;
    base_url: string;

    static fromEntity(service: Service) : ServiceDto {
        let dto = new ServiceDto();
        dto.description = service.description;
        dto.duration = service.duration;
        dto.price = service.price;
        dto.title = service.title;
        dto.id = service.id;
        dto.base_url = service.base_url;
        return dto;
    }

    static fromDto(dto: ServiceDto) : Service {
        let entity = new Service();
        entity.description = dto.description;
        entity.duration = dto.duration;
        entity.price = dto.price;
        entity.title = dto.title;
        entity.base_url = dto.base_url;
        return entity;
    }
}