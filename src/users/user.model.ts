import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt
} from 'sequelize-typescript'
import { IDefineOptions } from 'sequelize-typescript/lib/interfaces/IDefineOptions'

const tableOptions: IDefineOptions = { timestamps: true }
@Table(tableOptions)
@Table
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  })
  id: number

  @Column
  firstName: string

  @Column
  lastName: string

  @Column
  birthDate: Date

  @Column
  email: string

  @Column
  password: string

  @CreatedAt
  creationDate: Date

  @UpdatedAt
  updatedOn: Date

  @DeletedAt
  deletionDate: Date
}
