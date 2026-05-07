import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userRepository } from './users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { BarberModule } from 'barber/barber.module';
import { RolesGuard } from './users.Roleguard';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, userRepository],
  exports: [TypeOrmModule, userRepository],
})
export class UsersModule {}
