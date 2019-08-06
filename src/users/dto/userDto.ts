import { ApiModelProperty } from '@nestjs/swagger'
import {
  IsOptional,
  IsDefined,
  IsString,
  IsDateString,
  IsEmail
} from 'class-validator'

export const GROUPS = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE'
}
export default class {
  readonly id: number

  @ApiModelProperty({ example: 'Micheal' })
  @IsDefined({ groups: [GROUPS.CREATE] })
  @IsOptional({ groups: [GROUPS.UPDATE] })
  @IsString({ always: true })
  readonly firstName: string

  @ApiModelProperty({ example: 'Scott' })
  @IsOptional({ always: true })
  @IsString({ always: true })
  readonly lastName: string

  @ApiModelProperty({ example: '1962-03-15T16:23:00.000Z' })
  @IsDefined({ groups: [GROUPS.CREATE] })
  @IsOptional({ groups: [GROUPS.UPDATE] })
  @IsDateString({ always: true })
  readonly birthDate: string

  @ApiModelProperty({ example: 'micheal.scott@dundermifflin.com' })
  @IsDefined({ groups: [GROUPS.CREATE] })
  @IsOptional({ groups: [GROUPS.UPDATE] })
  @IsEmail({}, { always: true })
  readonly email: string

  @ApiModelProperty({ example: '1234' })
  @IsDefined({ groups: [GROUPS.CREATE] })
  @IsOptional({ groups: [GROUPS.UPDATE] })
  @IsString({ always: true })
  readonly password: string
}
