import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserDto } from './dto'
import { User } from './user.entity'

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly usersRepository: Repository<User>

  async create(userDto: UserDto): Promise<User> {
    return this.usersRepository.save(userDto)
  }

  async update(id: string, userDto: UserDto): Promise<any> {
    const user = await this.usersRepository.findOne(id)

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    return this.usersRepository.save({ ...user, ...userDto })
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find()
  }

  async getOne(id: string): Promise<User> {
    const user = await this.usersRepository.findOne(id)

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    return user
  }
}
