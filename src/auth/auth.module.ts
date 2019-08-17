import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { LocalStrategy } from './local.strategy'
import { JwtStrategy } from './jwt.strategy'
import { UsersModule } from '../users/users.module'
import { ConfigModule } from '../config/config.module'
import { ConfigService } from '../config/config.service'

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secretOrPrivateKey: configService.jwtSecret,
        signOptions: { expiresIn: '1d' }
      })
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
