import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from './database/typeorm.module';
import { BarberModule } from './barber/barber.module';
import { ServiceModule } from './service/service.module';
import { AppointmentModule } from './appointment/appointment.module';
import { userRepository } from 'users/users.repository';

@Module({
  imports: [UsersModule, TypeOrmModule, BarberModule, ServiceModule, AppointmentModule, userRepository],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
