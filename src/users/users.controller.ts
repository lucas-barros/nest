import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  Param,
  Response,
  HttpStatus,
  Injectable,
  Inject,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { ApiUseTags } from '@nestjs/swagger'
import { UsersService } from './users.service'
import { UserDto } from './dto'
import { ParseIntPipe } from '../pipes'
import { VALIDATION_GROUPS } from '../constants'

@Injectable()
@ApiUseTags('users')
@Controller('users')
export class UsersController {
  @Inject(UsersService)
  private service: UsersService

  @Post()
  @UsePipes(
    new ValidationPipe({
      transformOptions: { groups: [VALIDATION_GROUPS.CREATE] }
    })
  )
  async create(@Response() res, @Body() userDto: UserDto) {
    const user = await this.service.create(userDto)
    return res.status(HttpStatus.OK).json(user)
  }

  @Put('/:id')
  @UsePipes(
    new ValidationPipe({
      transformOptions: { groups: [VALIDATION_GROUPS.UPDATE] }
    })
  )
  async update(
    @Response() res,
    @Body() userDto: UserDto,
    @Param('id', new ParseIntPipe()) id: number
  ) {
    const user = await this.service.update(id, userDto)

    return res.status(HttpStatus.OK).json(user)
  }

  @Get()
  async getUsers(@Response() res) {
    const users = await this.service.findAll()
    return res.status(HttpStatus.OK).json(users)
  }

  @Get('/:id')
  public async getUser(
    @Response() res,
    @Param('id', new ParseIntPipe()) id: number
  ) {
    const user = await this.service.findOne(id)
    return res.status(HttpStatus.OK).json(user)
  }

  @Get('/email/:email')
  public async getUserByEmail(@Response() res, @Param('email') email: string) {
    const user = await this.service.findOneByEmail(email)
    return res.status(HttpStatus.OK).json(user)
  }
}
