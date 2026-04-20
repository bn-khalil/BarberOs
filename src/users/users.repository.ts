import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { Repository } from "typeorm";


export class userRepository {
    constructor (
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    async save(user: Partial<User>): Promise <User> {
        return this.userRepository.save(user);
    }

    async findAll(): Promise <User[]> {
        return this.userRepository.find();
    }

    async findUser(id: string): Promise <User | null> {
        return this.userRepository.findOne(
            {where: { id: id }}
        );
    }
} 