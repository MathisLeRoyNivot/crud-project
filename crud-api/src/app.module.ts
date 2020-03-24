import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DbModule } from './db/db.module';
// import { OrmModule } from './orm/orm.module';
// import { ProductsModule } from './products/products.module';

@Module({
  imports: [AuthModule, UserModule, DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
