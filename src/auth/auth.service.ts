import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import * as crypto from 'crypto'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email)
    const hash = crypto.createHmac('sha256', pass).digest('hex')
    if (user && user.password === hash) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
