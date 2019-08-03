import {
  Controller,
  Get,
  Post,
  Body,
  Response,
  HttpStatus
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(@Response() res) {
    const users = await this.usersService.findAll()
    return res.status(HttpStatus.OK).json(users)
  }

  @Post()
  async create(@Response() res, @Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto)
    return res.status(HttpStatus.OK).json(user)
  }
}
