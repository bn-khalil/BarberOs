import { Module } from '@nestjs/common';
import { BarberService } from './barber.service';
import { BarberController } from './barber.controller';
import { BarberRepository } from './barber.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Barber } from './barber.entity';
import { UsersModule } from 'users/users.module';
import { AuthModule } from 'auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Barber]),
    UsersModule
  ],
  controllers: [BarberController],
  providers: [BarberService, BarberRepository],
})
export class BarberModule {}
