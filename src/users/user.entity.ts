import * as crypto from 'crypto'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert
} from 'typeorm'
import { ApiModelProperty } from '@nestjs/swagger'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  birthDate: string

  @Column({ unique: true })
  email: string

  @ApiModelProperty({ example: '1234' })
  @Column()
  password: string

  @ApiModelProperty({ example: false })
  @Column({ default: false })
  isVerified: boolean

  @CreateDateColumn()
  createdOn: string

  @UpdateDateColumn()
  updatedOn: string

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex')
  }
}
