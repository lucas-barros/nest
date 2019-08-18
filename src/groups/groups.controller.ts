import {
  Controller,
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

import { ApiUseTags, ApiImplicitBody } from '@nestjs/swagger'
import { GroupsService } from './groups.service'
import { GroupDto, GroupsParams } from './dto'
import { VALIDATION_GROUPS } from '../constants'

@Injectable()
@ApiUseTags('groups')
@Controller('groups')
export class GroupsController {
  @Inject(GroupsService)
  private service: GroupsService

  @Post()
  @UsePipes(
    new ValidationPipe({ transformOptions: { groups: [VALIDATION_GROUPS.CREATE] } })
  )
  @ApiImplicitBody({ name: 'Group', type: GroupDto })
  async create(@Response() res, userDto: GroupDto) {
    const user = await this.service.create(userDto)
    return res.status(HttpStatus.OK).json(user)
  }

  @Put('/:id')
  @UsePipes(
    new ValidationPipe({ transformOptions: { groups: [VALIDATION_GROUPS.CREATE] } })
  )
  @ApiImplicitBody({ name: 'User', type: GroupDto })
  async update(
    @Response() res,
    userDto: GroupDto,
    @Param() params: GroupsParams
  ) {
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
  public async getUser(@Response() res, @Param() params: GroupsParams) {
    const { id } = params
    const user = await this.service.getOne(id)
    return res.status(HttpStatus.OK).json(user)
  }
}
