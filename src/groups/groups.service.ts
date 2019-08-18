import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { GroupDto } from './dto'
import { Group } from './group.entity'

@Injectable()
export class GroupsService {
  @InjectRepository(Group)
  private readonly usersRepository: Repository<Group>

  async create(userGroupDto: GroupDto): Promise<Group> {
    return this.usersRepository.save(userGroupDto)
  }

  async update(id: string, userGroupDto: GroupDto): Promise<any> {
    const user = await this.usersRepository.findOne(id)

    if (!user) {
      throw new HttpException('User group not found', HttpStatus.NOT_FOUND)
    }

    return this.usersRepository.save({ ...user, ...userGroupDto })
  }

  async findAll(): Promise<Group[]> {
    return this.usersRepository.find()
  }

  async getOne(id: string): Promise<Group> {
    const user = await this.usersRepository.findOne(id)

    if (!user) {
      throw new HttpException('User group not found', HttpStatus.NOT_FOUND)
    }

    return user
  }
}
