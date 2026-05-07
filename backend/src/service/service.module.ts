import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { serviceRepository } from './service.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './service.entity';
import { UsersModule } from 'users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Service]),
    UsersModule
  ],
  controllers: [ServiceController],
  providers: [ServiceService, serviceRepository],
})
export class ServiceModule {}
