import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Response,
  HttpStatus,
  Injectable,
  Inject,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'

import { ApiUseTags, ApiImplicitBody } from '@nestjs/swagger'
import { UsersService } from './users.service'
import { UserDto, UserParams, GROUPS } from './dto'

@Injectable()
@ApiUseTags('users')
@Controller('users')
export class UsersController {
  @Inject(UsersService)
  private service: UsersService

  @Post()
  @UsePipes(
    new ValidationPipe({ transformOptions: { groups: [GROUPS.CREATE] } })
  )
  @ApiImplicitBody({ name: 'User', type: UserDto })
  async create(@Response() res, userDto: UserDto) {
    const user = await this.service.create(userDto)
    return res.status(HttpStatus.OK).json(user)
  }

  @Put('/:id')
  @UsePipes(
    new ValidationPipe({ transformOptions: { groups: [GROUPS.CREATE] } })
  )
  @ApiImplicitBody({ name: 'User', type: UserDto })
  async update(@Response() res, userDto: UserDto, @Param() params: UserParams) {
    const { id } = params
    const user = await this.service.update(id, userDto)

    return res.status(HttpStatus.OK).json(user)
  }

  @Get()
  async getUsers(@Response() res) {
    const users = await this.service.findAll()
    return res.status(HttpStatus.OK).json(users)
  }

  @Get('/:id')
  public async getUser(@Response() res, @Param() params: UserParams) {
    const { id } = params
    const user = await this.service.getOne(id)
    return res.status(HttpStatus.OK).json(user)
  }
}
