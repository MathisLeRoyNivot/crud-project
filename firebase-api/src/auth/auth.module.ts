import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import * as fs from 'fs';

@Module({
  imports: [
    UserModule, 
    PassportModule.register({defaultStrategy: 'jwt'}), 
    JwtModule.register({
      privateKey: fs.readFileSync('src/auth/private.key', 'utf8'),
      signOptions: {
        expiresIn: '60s',
        algorithm: 'RS256'
      },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
