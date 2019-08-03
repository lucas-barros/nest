import { Injectable, Inject } from '@nestjs/common'
import { CreateUserDto } from './dto'
import { User } from './user.model'

@Injectable()
export class UsersService {
  constructor(
    @Inject('UsersRepository') private readonly usersRepository: typeof User
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    return this.usersRepository.create<User>(user)
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.findAll<User>()
  }
}
