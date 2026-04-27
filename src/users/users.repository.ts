import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class userRepository {
    constructor (
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    async createUser(user: Partial<User>): Promise <User> {
        return this.userRepository.save(user);
    }

    async findAll(): Promise <User[]> {
        return this.userRepository.find();
    }

    async findUserById(id: string): Promise <User | null> {
        return this.userRepository.findOne(
            {where: { id: id }}
        );
    }
    
    async findUserByPhone(phone: string): Promise <User | null> {
        return this.userRepository.findOne(
            {where: { phone_number: phone }}
        );
    }
} 