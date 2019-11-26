import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrmModule } from './orm/orm.module';

@Module({
  imports: [AuthModule, UsersModule, OrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
