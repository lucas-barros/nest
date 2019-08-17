import {
  Inject,
  Injectable,
  Controller,
  Body,
  Post,
  Request,
  UseGuards
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiUseTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { LoginDto } from './dto'

@Injectable()
@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  @Inject(AuthService)
  private service: AuthService

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  async create(@Request() req, @Body() loginDto: LoginDto) {
    return this.service.login(req.user)
  }
}
