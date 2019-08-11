import { ApiModelProperty } from '@nestjs/swagger'
import {
  IsOptional,
  IsDefined,
  IsString,
  IsDateString,
  IsEmail,
  IsBoolean,
  IsEmpty
} from 'class-validator'
import { VALIDATION_GROUPS } from '../../constants'

export default class {
  readonly id: number

  @ApiModelProperty({ example: 'Micheal' })
  @IsDefined({ groups: [VALIDATION_GROUPS.CREATE] })
  @IsOptional({ groups: [VALIDATION_GROUPS.UPDATE] })
  @IsString({ always: true })
  readonly firstName: string

  @ApiModelProperty({ example: 'Scott' })
  @IsOptional({ always: true })
  @IsString({ always: true })
  readonly lastName: string

  @ApiModelProperty({ example: '1962-03-15T16:23:00.000Z' })
  @IsDefined({ groups: [VALIDATION_GROUPS.CREATE] })
  @IsOptional({ groups: [VALIDATION_GROUPS.UPDATE] })
  @IsDateString({ always: true })
  readonly birthDate: string

  @ApiModelProperty({ example: 'micheal.scott@dundermifflin.com' })
  @IsDefined({ groups: [VALIDATION_GROUPS.CREATE] })
  @IsOptional({ groups: [VALIDATION_GROUPS.UPDATE] })
  @IsEmail({}, { always: true })
  readonly email: string

  @ApiModelProperty({ example: '1234' })
  @IsDefined({ groups: [VALIDATION_GROUPS.CREATE] })
  @IsOptional({ groups: [VALIDATION_GROUPS.UPDATE] })
  @IsString({ always: true })
  readonly password: string

  @ApiModelProperty({ example: false })
  @IsEmpty({ groups: [VALIDATION_GROUPS.CREATE] })
  @IsOptional({ groups: [VALIDATION_GROUPS.UPDATE] })
  @IsBoolean({ always: true })
  readonly isVerified: boolean
}
