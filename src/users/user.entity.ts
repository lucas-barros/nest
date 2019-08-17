import * as crypto from 'crypto'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert
} from 'typeorm'

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

  @Column()
  password: string

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
