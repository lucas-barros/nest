import { ApiModelProperty } from '@nestjs/swagger'
import { IsDefined, IsString, IsEmail } from 'class-validator'

export default class LoginDto {
  @ApiModelProperty({ example: 'micheal.scott@dundermifflin.com' })
  @IsDefined()
  @IsEmail({}, { always: true })
  readonly email: string

  @ApiModelProperty({ example: '1234' })
  @IsDefined()
  @IsString({ always: true })
  readonly password: string
}
