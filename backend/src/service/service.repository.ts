import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Service } from "./service.entity";
import { Repository } from "typeorm";

@Injectable()
export class serviceRepository {
    constructor (
        @InjectRepository(Service)
        private serviceRepositoy: Repository<Service>,
    ){}

    get manager() {
        return this.serviceRepositoy;
    }
}