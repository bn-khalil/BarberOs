import { InjectRepository } from "@nestjs/typeorm";
import { Barber } from "./barber.entity";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

@Injectable()
export class BarberRepository {
    constructor(
        @InjectRepository(Barber)
        private barberRepository: Repository<Barber>,
    ){}

    async findBarberById(id: string): Promise <Barber | null> {
        return this.barberRepository.findOneBy({id: id});
    }

    async findBarberByOwner(ownerId: string): Promise <Barber | null> {
        return this.barberRepository.findOneBy({owner: {id: ownerId}});
    }

    get manager() {
        return this.barberRepository;
    }
}